import { DateTime } from '@basmilius/homey-common';

export function decode(encoded: Record<string, any>): ListItem {
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
            const due = encoded.due
                ? DateTime.fromISO(encoded.due)
                : undefined;

            return {
                id: encoded.id,
                type: 'task',
                created: DateTime.fromISO(encoded.created),
                checked: encoded.checked === true,
                content: encoded.content,
                dueDate: encoded.dueDate ?? due?.toISODate() ?? undefined,
                dueTime: encoded.dueTime ?? due?.toISOTime()?.substring(0, 8) ?? undefined,
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
                dueDate: listItem.dueDate,
                dueTime: listItem.dueTime,
                person: listItem.person
            };
    }
}

/**
 * Configurable mode for when date-only tasks (without a specific time) should be considered expired.
 * Set to 'endOf' to expire at 23:59:59, or specify a time like '18:00:00' for a specific end-of-day time.
 */
export const DATE_ONLY_TASK_EXPIRY_MODE: 'endOf' | string = 'endOf';

export function dueDateTime(date?: string, time?: string): DateTime | undefined {
    if (date) {
        if (!DateTime.fromFormat(date, 'yyyy-MM-dd').isValid) {
            const reversed = DateTime.fromFormat(date, 'dd-MM-yyyy');
            date = reversed.toFormat('yyyy-MM-dd');
        }

        if (time) {
            if (time.length === 5) {
                time += ':00';
            }

            return DateTime.fromFormat(`${date} ${time}`, 'yyyy-MM-dd HH:mm:ss');
        }

        // Apply configurable end-of-day time for date-only tasks
        if (DATE_ONLY_TASK_EXPIRY_MODE === 'endOf') {
            return DateTime.fromFormat(date, 'yyyy-MM-dd').endOf('day');
        } else {
            return DateTime.fromFormat(`${date} ${DATE_ONLY_TASK_EXPIRY_MODE}`, 'yyyy-MM-dd HH:mm:ss');
        }
    }

    return undefined;
}

export const GROCERY_LIST_CATEGORIES: readonly ListItemCategory<GroceryListCategory>[] = [
    {icon: 'carrot', category: 'fruits_vegetables', iconUnicode: ''},
    {icon: 'bread-loaf', category: 'bakery', iconUnicode: ''},
    {icon: 'salad', category: 'deli', iconUnicode: ''},
    {icon: 'steak', category: 'meat', iconUnicode: ''},
    {icon: 'fish', category: 'fish_seafood', iconUnicode: ''},
    {icon: 'cheese-swiss', category: 'dairy_eggs', iconUnicode: ''},
    {icon: 'bowl-spoon', category: 'breakfast_cereals', iconUnicode: ''},
    {icon: 'wheat', category: 'pasta_rice_grains', iconUnicode: ''},
    {icon: 'can-food', category: 'canned_jarred', iconUnicode: ''},
    {icon: 'bottle-droplet', category: 'sauces_condiments', iconUnicode: ''},
    {icon: 'leaf', category: 'herbs_spices', iconUnicode: ''},
    {icon: 'olive-branch', category: 'oils_vinegars', iconUnicode: ''},
    {icon: 'cookie', category: 'snacks_sweets', iconUnicode: ''},
    {icon: 'cup-straw', category: 'beverages', iconUnicode: ''},
    {icon: 'snowflake', category: 'frozen', iconUnicode: ''},
    {icon: 'capsules', category: 'health_vitamins', iconUnicode: ''},
    {icon: 'pump-soap', category: 'personal_care', iconUnicode: ''},
    {icon: 'bottle-baby', category: 'baby_products', iconUnicode: ''},
    {icon: 'paw-simple', category: 'pet_supplies', iconUnicode: ''},
    {icon: 'spray-can-sparkles', category: 'household', iconUnicode: ''}
] as const;

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
    dueDate?: string;
    dueTime?: string;
    person?: ListItemPerson;
};

export type ListItem =
    | NoteListItem
    | ProductListItem
    | TaskListItem;

export type ListItemCategory<TCategory> = {
    readonly category: TCategory;
    readonly icon: string;
    readonly iconUnicode: string;
};

export type ListItemPerson = {
    readonly id: string;
    readonly name: string;
    readonly image?: string;
};

export type ListItemType =
    | 'note'
    | 'product'
    | 'task';

export type GroceryListCategory =
    | 'fruits_vegetables'
    | 'bakery'
    | 'deli'
    | 'meat'
    | 'fish_seafood'
    | 'dairy_eggs'
    | 'breakfast_cereals'
    | 'pasta_rice_grains'
    | 'canned_jarred'
    | 'sauces_condiments'
    | 'herbs_spices'
    | 'oils_vinegars'
    | 'snacks_sweets'
    | 'beverages'
    | 'frozen'
    | 'health_vitamins'
    | 'personal_care'
    | 'baby_products'
    | 'pet_supplies'
    | 'household';
