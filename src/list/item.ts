import { DateTime } from '@basmilius/homey-common';

export function decode(encoded: Record<string, any>): ListItem {
    // todo(Bas): remove in v1.0.
    if ('completed' in encoded) {
        encoded.checked = encoded.completed;
    }

    switch (encoded.type as ListItemType) {
        case 'note':
            return {
                id: encoded.id,
                type: 'note',
                created: DateTime.fromISO(encoded.created),
                content: encoded.content
            } satisfies NoteListItem;

        case 'product':
            return {
                id: encoded.id,
                type: 'product',
                created: DateTime.fromISO(encoded.created),
                checked: encoded.checked === true,
                content: encoded.content,
                category: encoded.category,
                quantity: encoded.quantity
            } satisfies ProductListItem;

        case 'task':
            return {
                id: encoded.id,
                type: 'task',
                created: DateTime.fromISO(encoded.created),
                checked: encoded.checked === true,
                content: encoded.content,
                due: encoded.due ? DateTime.fromISO(encoded.due) : undefined,
                person: encoded.person
            } satisfies TaskListItem;
    }
}

export function encode(listItem: ListItem): Record<string, any> {
    switch (listItem.type) {
        case 'note':
            return {
                id: listItem.id,
                type: listItem.type,
                created: listItem.created.toISO(),
                content: listItem.content
            };

        case 'product':
            return {
                id: listItem.id,
                type: listItem.type,
                created: listItem.created.toISO(),
                checked: listItem.checked,
                content: listItem.content,
                category: listItem.category,
                quantity: listItem.quantity
            };

        case 'task':
            return {
                id: listItem.id,
                type: listItem.type,
                created: listItem.created.toISO(),
                checked: listItem.checked,
                content: listItem.content,
                due: listItem.due?.toISO(),
                person: listItem.person
            };
    }
}

export type GenericListItem = {
    readonly id: string;
    readonly type: ListItemType;
    readonly created: DateTime;
};

export type NoteListItem = GenericListItem & {
    readonly type: 'note';
    content: string;
};

export type ProductListItem = GenericListItem & {
    readonly type: 'product';
    checked: boolean;
    content: string;
    category?: string;
    quantity: number;
};

export type TaskListItem = GenericListItem & {
    readonly type: 'task';
    checked: boolean;
    content: string;
    due?: DateTime;
    person?: ListItemPerson;
};

export type ListItem =
    | NoteListItem
    | ProductListItem
    | TaskListItem;

export type ListItemPerson = {
    readonly id: string;
    readonly name: string;
    readonly image?: string;
};

export type ListItemType =
    | 'note'
    | 'product'
    | 'task';
