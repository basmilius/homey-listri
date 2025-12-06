import { DateTime, type WidgetApiRequest } from '@basmilius/homey-common';
import { AutocompleteProviders } from '../../src/flow';
import type { ListDevice, ListItem, ListItemPerson, ListItemType } from '../../src/list';
import type { ListLook, ListriApp } from '../../src/types';

export async function addItem({homey: {app}, params, body}: WidgetApiRequest<ListriApp, AddItemBody, AddItemParams>): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return false;
    }

    if (body.content.trim().length === 0) {
        return false;
    }

    switch (body.type) {
        case 'note':
            await device.addNote(body.content);
            break;

        case 'product':
            await device.addProduct(body.content, body.quantity);
            break;

        case 'task':
            const personProvider = app.registry.findAutocompleteProvider(AutocompleteProviders.Person);
            const persons = (await personProvider?.find('') ?? []) as ListItemPerson[];
            const person = persons.find(person => person.id === body.personId);

            await device.addTask(body.content, undefined, body.due ? DateTime.fromISO(body.due) : undefined, person);
            break;
    }

    return true;
}

export async function get({homey: {app}, params}: WidgetApiRequest<ListriApp, never, GetParams>): Promise<List | null> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return null;
    }

    const look = await device.getLook();

    return {
        ...look,
        name: device.getName(),
        type: device.driver.id
    };
}

export async function getItem({homey: {app}, params}: WidgetApiRequest<ListriApp, never, GetItemParams>): Promise<ListItem | null> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return null;
    }

    return await device.getItem(params.id);
}

export async function getItems({homey: {app}, params}: WidgetApiRequest<ListriApp, never, GetItemsParams>): Promise<ListItem[]> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return [];
    }

    return await device.getItems();
}

export async function getPersons({homey: {app}}: WidgetApiRequest<ListriApp>): Promise<ListItemPerson[]> {
    return await app.registry
        .findAutocompleteProvider(AutocompleteProviders.Person)!
        .find('') as ListItemPerson[];
}

export async function markComplete({homey: {app}, params}: WidgetApiRequest<ListriApp, never, MarkCompleteParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    await device.markComplete(params.id);
}

export async function markIncomplete({homey: {app}, params}: WidgetApiRequest<ListriApp, never, MarkIncompleteParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    await device.markIncomplete(params.id);
}

export async function removeItem({homey: {app}, params}: WidgetApiRequest<ListriApp, never, RemoveItemParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    await device.removeItem(params.id);
}

export async function updateQuantity({homey: {app}, params, body}: WidgetApiRequest<ListriApp, SetQuantityBody, SetQuantityParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    const quantity = await device.getQuantity(params.id);
    await device.setQuantity(params.id, quantity + body.quantity);
}

type AddItemBody = {
    readonly type: ListItemType;
    readonly content: string;
    readonly personId?: string;
    readonly due?: string;
    readonly quantity?: number;
};

type AddItemParams = {
    readonly deviceId: string;
};

type GetParams = {
    readonly deviceId: string;
};

type GetItemParams = {
    readonly deviceId: string;
    readonly id: string;
};

type GetItemsParams = {
    readonly deviceId: string;
};

type MarkCompleteParams = {
    readonly deviceId: string;
    readonly id: string;
};

type MarkIncompleteParams = {
    readonly deviceId: string;
    readonly id: string;
};

type RemoveItemParams = {
    readonly deviceId: string;
    readonly id: string;
};

type SetQuantityBody = {
    readonly quantity: number;
};

type SetQuantityParams = {
    readonly deviceId: string;
    readonly id: string;
};

type List = ListLook & {
    readonly name: string;
    readonly type: string;
};
