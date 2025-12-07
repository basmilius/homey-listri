import { colors, DateTime, Device, Driver, icons } from '@basmilius/homey-common';
import Homey from 'homey';
import { ulid } from 'ulid';
import { Triggers } from '../flow';
import type { ListItem, ListItemDaily, ListItemPerson } from './item';
import { decode, encode } from './item';
import type { ListLook, ListriApp, Writable } from '../types';

export class ListDevice<TDriver extends ListDriver = ListDriver> extends Device<ListriApp, TDriver> {

    #items: ListItem[] = [];

    async addItem(item: Omit<ListItem, 'id' | 'created'>): Promise<void> {
        this.#items.push({
            id: ulid(),
            created: DateTime.now(),
            ...item
        });

        await this.save();
    }

    async addNote(content: string): Promise<void> {
        await this.addItem({
            type: 'note',
            completed: false,
            content
        });
    }

    async addProduct(content: string, quantity: number = 1): Promise<void> {
        await this.addItem({
            type: 'product',
            completed: false,
            content,
            quantity
        });
    }

    async addTask(content: string, daily?: ListItemDaily, due?: DateTime, person?: ListItemPerson): Promise<void> {
        await this.addItem({
            type: 'task',
            completed: false,
            content,
            daily,
            due,
            person
        });
    }

    async clearList(): Promise<void> {
        this.#items = [];

        await this.save();
    }

    async findNoteId(content: string): Promise<string | null> {
        return this.#items
            .filter(item => item.type === 'note')
            .find(item => item.content === content)?.id ?? null;
    }

    async findProductId(content: string): Promise<string | null> {
        return this.#items
            .filter(item => item.type === 'product')
            .find(item => item.content === content)?.id ?? null;
    }

    async findTaskId(content: string): Promise<string | null> {
        return this.#items
            .filter(item => item.type === 'task')
            .find(item => item.content === content)?.id ?? null;
    }

    async getItem(id: string): Promise<ListItem | null> {
        return this.#items.find(item => item.id === id) ?? null;
    }

    async getItemIndex(id: string): Promise<number | null> {
        return this.#items.findIndex(item => item.id === id);
    }

    async getItems(): Promise<ListItem[]> {
        return this.#items;
    }

    async getLook(): Promise<ListLook> {
        const color = this.getStoreValue('color');
        const icon = this.getStoreValue('icon');

        return {
            color,
            icon
        };
    }

    async getQuantity(id: string): Promise<number> {
        const item = await this.getItem(id);

        return item?.quantity ?? 0;
    }

    async loadItems(): Promise<void> {
        this.#items = (this.getStoreValue('items') ?? [])
            .map(decode);
    }

    async markComplete(id: string): Promise<boolean> {
        const index = await this.getItemIndex(id);

        if (index === null) {
            return false;
        }

        (this.#items[index] as Writable<ListItem>)['completed'] = true;

        await this.save();

        await Promise.allSettled([
            this.appDriver.triggerAnyTaskMarkedAsDone(this, this.#items[index].content),
            this.appDriver.triggerTaskMarkedAsDone(this, this.#items[index].content)
        ]);

        return true;
    }

    async markIncomplete(id: string): Promise<boolean> {
        const index = await this.getItemIndex(id);

        if (index === null) {
            return false;
        }

        (this.#items[index] as Writable<ListItem>)['completed'] = false;

        await this.save();

        await Promise.allSettled([
            this.appDriver.triggerAnyTaskMarkedAsOpen(this, this.#items[index].content),
            this.appDriver.triggerTaskMarkedAsOpen(this, this.#items[index].content)
        ]);

        return true;
    }

    async removeCompletedItems(): Promise<void> {
        this.#items = this.#items.filter(item => !item.completed);
        await this.save();
    }

    async removeItem(id: string): Promise<boolean> {
        const index = await this.getItemIndex(id);

        if (index === null) {
            return false;
        }

        this.#items.splice(index, 1);

        await this.save();

        return true;
    }

    async setCategory(id: string, category?: string): Promise<boolean> {
        const index = await this.getItemIndex(id);

        if (index === null) {
            return false;
        }

        (this.#items[index] as Writable<ListItem>)['category'] = category;

        await this.save();

        return true;
    }

    async setQuantity(id: string, quantity: number): Promise<boolean> {
        const index = await this.getItemIndex(id);

        if (index === null) {
            return false;
        }

        (this.#items[index] as Writable<ListItem>)['quantity'] = quantity;

        await this.save();

        return true;
    }

    async onInit(): Promise<void> {
        await this.loadItems();
        await super.onInit();
    }

    async onItemsChanged(): Promise<void> {
        this.homey.api.realtime('list-items-changed', this.id);
    }

    async onLookChanged(): Promise<void> {
        this.homey.api.realtime('list-look-changed', this.id);
    }

    async save(): Promise<void> {
        this.#items = this.#items.toSorted((a: ListItem, b: ListItem) => (
            a.completed === b.completed
                ? (a.created >= b.created ? 1 : -1)
                : a.completed ? 1 : -1
        ));

        await this.setStoreValue('items', this.#items.map(encode));
        await this.onItemsChanged();
    }

}

export class ListDriver extends Driver<ListriApp> {

    async onPair(session: Homey.Driver.PairSession): Promise<void> {
        await this.#onPairSession(session);
    }

    async onRepair(session: Homey.Driver.PairSession, device: ListDevice): Promise<void> {
        await this.#onPairSession(session);

        session.setHandler('fetch', async () => ({
            name: device.getName(),
            data: device.getStore()
        }));

        session.setHandler('save', async (data: { readonly name: string; readonly store: Record<'color' | 'icon', string>; }) => {
            await device.setStoreValue('color', data.store.color);
            await device.setStoreValue('icon', data.store.icon);
            await device.onLookChanged();
        });
    }

    async triggerAnyTaskMarkedAsDone(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.AnyTaskMarkedAsDone)
            ?.trigger(list, {}, {task});
    }

    async triggerAnyTaskMarkedAsOpen(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.AnyTaskMarkedAsOpen)
            ?.trigger(list, {}, {task});
    }

    async triggerTaskMarkedAsDone(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskMarkedAsDone)
            ?.trigger(list, {task});
    }

    async triggerTaskMarkedAsOpen(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskMarkedAsOpen)
            ?.trigger(list, {task});
    }

    async #onPairSession(session: Homey.Driver.PairSession): Promise<void> {
        session.setHandler('colors', async () => colors);
        session.setHandler('icons', async () => icons);
        session.setHandler('id', async () => ulid());
    }

}
