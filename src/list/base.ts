import { colors, Device, Driver, icons } from '@basmilius/homey-common';
import Homey from 'homey';
import type { DateTime } from 'luxon';
import { ulid } from 'ulid';
import type { ListItem, ListItemDaily, ListItemPerson } from './item';
import { decode, encode } from './item';
import type { ListLook, ListriApp, Writable } from '../types';

export class ListDevice extends Device<ListriApp> {

    async addItem(item: Omit<ListItem, 'id'>): Promise<void> {
        const items = await this.getItems();

        items.push({
            id: ulid(),
            ...item
        });

        await this.setItems(items);
    }

    async addNote(content: string): Promise<void> {
        await this.addItem({
            type: 'note',
            completed: false,
            content
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
        await this.setItems([]);
    }

    async findItemId(content: string): Promise<string | null> {
        const items = await this.getItems();

        return items.find(item => item.content === content)?.id ?? null;
    }

    async getItem(id: string): Promise<ListItem | null> {
        const items = await this.getItems();

        return items.find(item => item.id === id) ?? null;
    }

    async getItems(): Promise<ListItem[]> {
        const items = this.getStoreValue('items') ?? [];

        return items
            .map(decode)
            .toSorted((a: ListItem, b: ListItem) => a.completed === b.completed ? a.content.localeCompare(b.content) : a.completed ? 1 : -1);
    }

    async getLook(): Promise<ListLook> {
        const color = this.getStoreValue('color');
        const icon = this.getStoreValue('icon');

        return {
            color,
            icon
        };
    }

    async markAsDone(id: string): Promise<boolean> {
        const items = await this.getItems();
        const itemIndex = items.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return false;
        }

        (items[itemIndex] as Writable<ListItem>)['completed'] = true;

        await this.setItems(items);

        return true;
    }

    async markAsOpen(id: string): Promise<boolean> {
        const items = await this.getItems();
        const itemIndex = items.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return false;
        }

        (items[itemIndex] as Writable<ListItem>)['completed'] = false;

        await this.setItems(items);

        return true;
    }

    async removeItem(id: string): Promise<boolean> {
        const items = await this.getItems();
        const itemIndex = items.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return false;
        }

        items.splice(itemIndex, 1);

        await this.setItems(items);

        return true;
    }

    async setItems(items: ListItem[]): Promise<void> {
        await this.setStoreValue('items', items.map(encode));
        await this.onItemsChanged();
    }

    async onItemsChanged(): Promise<void> {
        this.homey.api.realtime('list-items-changed', this.id);
    }

    async onLookChanged(): Promise<void> {
        this.homey.api.realtime('list-look-changed', this.id);
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

    async #onPairSession(session: Homey.Driver.PairSession): Promise<void> {
        session.setHandler('colors', async () => colors);
        session.setHandler('icons', async () => icons);
        session.setHandler('id', async () => ulid());
    }

}
