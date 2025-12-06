import { DateTime } from '@basmilius/homey-common';

export function decode(encoded: Record<string, any>): ListItem {
    return {
        id: encoded.id,
        created: DateTime.fromISO(encoded.created),
        completed: encoded.completed,
        type: encoded.type,
        content: encoded.content,
        due: encoded.due ? DateTime.fromISO(encoded.due) : undefined,
        person: encoded.person,
        daily: encoded.daily,
        quantity: encoded.quantity
    };
}

export function encode(listItem: ListItem): Record<string, any> {
    return {
        id: listItem.id,
        created: listItem.created.toISO(),
        completed: listItem.completed,
        type: listItem.type,
        content: listItem.content,
        due: listItem.due?.toISO(),
        person: listItem.person,
        daily: listItem.daily,
        quantity: listItem.quantity
    };
}

export type ListItem = {
    readonly id: string;
    readonly type: ListItemType;
    readonly created: DateTime;
    readonly completed: boolean;
    readonly content: string;
    readonly due?: DateTime;
    readonly person?: ListItemPerson;
    readonly daily?: ListItemDaily;
    readonly quantity?: number;
};

export type ListItemPerson = {
    readonly id: string;
    readonly name: string;
    readonly image?: string;
};

export type ListItemDaily =
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';

export type ListItemType =
    | 'note'
    | 'product'
    | 'task';
