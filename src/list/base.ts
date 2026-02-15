import { colors, DateTime, Device, Driver, icons } from '@basmilius/homey-common';
import Homey from 'homey';
import { ulid } from 'ulid';
import { Triggers } from '../flow';
import type { ListLook, ListriApp, Writable } from '../types';
import type { ListItem, NoteListItem } from './item';
import { decode, encode } from './item';

export class ListDevice<TDriver extends ListDriver = ListDriver> extends Device<ListriApp, TDriver> {

    get categorizedItems(): Record<string, ListItem[]> {
        const grouped = Object.groupBy(this.items, item => (item as any).category ?? '__other__') as Record<string, ListItem[]>;

        const sortedEntries = Object.entries<ListItem[]>(grouped).sort(([a], [b]) => {
            if (a === '__other__') return 1;
            if (b === '__other__') return -1;

            return a.localeCompare(b);
        });

        return Object.fromEntries(sortedEntries);
    }

    get items(): ListItem[] {
        return this.#items;
    }

    get notes(): NoteListItem[] {
        return this.#items.filter(item => item.type === 'note');
    }

    #items: ListItem[] = [];

    async add<TItem extends ListItem>(item: Omit<TItem, 'id' | 'created'>): Promise<ListItem> {
        const listItem: TItem = {
            id: ulid(),
            created: DateTime.now(),
            ...item
        } as TItem;

        this.#items.push(listItem);

        await this.#save();

        return listItem;
    }

    async clear(): Promise<void> {
        this.#items = [];

        await this.#save();
    }

    async load(): Promise<void> {
        this.#items = (this.getStoreValue('items') ?? [])
            .map(decode);
    }

    async find(id: string): Promise<ListItem | null> {
        return this.#items.find(item => item.id === id) ?? null;
    }

    async findIndex(id: string): Promise<number | null> {
        return this.#items.findIndex(item => item.id === id);
    }

    async getContents(items: 'all' | 'open' | 'checked'): Promise<string> {
        const strings: string[] = [];

        for (const item of this.items) {
            if ('checked' in item) {
                if (items === 'checked' && !item.checked) {
                    continue;
                }

                if (items === 'open' && item.checked) {
                    continue;
                }
            }

            switch (item.type) {
                case 'note':
                    strings.push(`- 📝 ${item.content}`);
                    break;

                case 'product':
                    strings.push(`- ${item.checked ? '✅ ' : ''} ${item.quantity}x ${item.content}`);
                    break;

                case 'task':
                    strings.push(`- ${item.checked ? '✅ ' : ''} ${item.content}${item.person ? ` (${item.person.name})` : ''}${item.due ? ` (${item.due.toSQL()})` : ''}`);
                    break;
            }
        }

        return strings.join('\n');
    }

    async getContentsMarkdown(items: 'all' | 'open' | 'checked'): Promise<string> {
        const strings: string[] = [];

        for (const item of this.items) {
            if ('checked' in item) {
                if (items === 'checked' && !item.checked) {
                    continue;
                }

                if (items === 'open' && item.checked) {
                    continue;
                }
            }

            switch (item.type) {
                case 'note':
                    strings.push(`- 📝 ${item.content}`);
                    break;

                case 'product':
                    strings.push(`- ${item.checked ? '[x]' : '[ ]'} ${item.quantity}x ${item.content}`);
                    break;

                case 'task':
                    strings.push(`- ${item.checked ? '[x]' : '[ ]'} ${item.content}${item.person ? ` (${item.person.name})` : ''}${item.due ? ` (${item.due.toSQL()})` : ''}`);
                    break;
            }
        }

        return strings.join('\n');
    }

    async check(id: string, checked: boolean = true): Promise<boolean> {
        const index = await this.findIndex(id);

        if (index === null) {
            return false;
        }

        const item = this.#items[index] as Writable<ListItem>;

        if ('checked' in item) {
            return await this.set(item, 'checked', checked);
        }

        return false;
    }

    async remove(id: string): Promise<boolean> {
        const index = await this.findIndex(id);

        if (index === null) {
            return false;
        }

        this.#items.splice(index, 1);

        await this.#save();

        return true;
    }

    async removeChecked(): Promise<void> {
        this.#items = this.#items.filter(item => !('checked' in item) || !item.checked);
        await this.#save();
    }

    async set<TItem extends ListItem>(item: TItem, field: keyof TItem, value: unknown): Promise<boolean> {
        const index = await this.findIndex(item.id);

        if (index === null) {
            return false;
        }

        (this.#items[index] as any)[field] = value;

        await this.#save();

        return true;
    }

    async addNote(content: string): Promise<void> {
        await this.add<NoteListItem>({
            type: 'note',
            content
        });

        await this.appDriver.triggerNoteCreated(this, content);
    }

    async editNote(id: string, content: string): Promise<boolean> {
        const item = await this.find(id);

        if (!item || item.type !== 'note') {
            return false;
        }

        // todo(Bas): Maybe add a trigger card here for when a note is changed.
        await this.set(item, 'content', content);

        return true;
    }

    async findNote(content: string): Promise<NoteListItem | null> {
        return this.notes.find(item => item.content === content) ?? null;
    }

    async findNoteId(content: string): Promise<string | null> {
        return this.notes.find(item => item.content === content)?.id ?? null;
    }

    async removeNote(content: string): Promise<boolean> {
        const note = await this.findNote(content);

        if (!note) {
            return false;
        }

        const result = await this.remove(note.id);

        if (!result) {
            return false;
        }

        await this.appDriver.triggerNoteRemoved(this, note.content);

        return true;
    }

    async getLook(): Promise<ListLook> {
        const color = this.getStoreValue('color');
        const icon = this.getStoreValue('icon');

        return {
            color,
            icon
        };
    }

    async onInit(): Promise<void> {
        await this.load();
        await super.onInit();
        this.log('Initialized.');
    }

    async onItemsChanged(): Promise<void> {
        this.homey.api.realtime('list-items-changed', {
            id: this.id,
            items: this.#items
        });
    }

    async onLookChanged(): Promise<void> {
        this.homey.api.realtime('list-look-changed', this.id);
    }

    async #save(): Promise<void> {
        this.#items = this.#items.toSorted((a: ListItem, b: ListItem) => {
            const aChecked = 'checked' in a ? a.checked : false;
            const bChecked = 'checked' in b ? b.checked : false;

            if (aChecked !== bChecked) {
                return aChecked ? 1 : -1;
            }

            // For unchecked items, sort by deadline first (if available)
            if (!aChecked && !bChecked) {
                const aDue = 'due' in a ? a.due : undefined;
                const bDue = 'due' in b ? b.due : undefined;

                // Both have deadlines: sort by deadline (earliest first)
                if (aDue && bDue) {
                    return aDue.valueOf() - bDue.valueOf();
                }

                // Only one has a deadline: items with deadlines come first
                if (aDue && !bDue) {
                    return -1;
                }

                if (!aDue && bDue) {
                    return 1;
                }
            }

            // For items without deadlines or checked items, sort by creation date
            return a.created >= b.created ? 1 : -1;
        });

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

    async triggerNoteCreated(list: ListDevice, note: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.NoteCreated)
            ?.trigger(list, {note}, {note});
    }

    async triggerNoteRemoved(list: ListDevice, note: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.NoteRemoved)
            ?.trigger(list, {note}, {note});
    }

    async #onPairSession(session: Homey.Driver.PairSession): Promise<void> {
        session.setHandler('colors', async () => colors);
        session.setHandler('icons', async () => icons);
        session.setHandler('id', async () => ulid());
    }

}
