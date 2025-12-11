import { DateTime, type WidgetApiRequest } from '@basmilius/homey-common';
import { AutocompleteProviders } from '../../src/flow';
import { BasicListDevice, GroceryListDevice, type ListDevice, type ListItem, type ListItemPerson, type ListItemType } from '../../src/list';
import type { ListLook, ListriApp } from '../../src/types';

export async function addItem({homey: {app}, params, body}: WidgetApiRequest<ListriApp, AddItemBody, AddItemParams>): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return false;
    }

    if (body.content.trim().length === 0) {
        return false;
    }

    if (body.type === 'note') {
        await device.addNote(body.content);

        return true;
    }

    if (body.type === 'product' && device instanceof GroceryListDevice) {
        await device.addProduct(body.content, body.quantity);

        return true;
    }

    if (body.type === 'task' && device instanceof BasicListDevice) {
        const personProvider = app.registry.findAutocompleteProvider(AutocompleteProviders.Person);
        const persons = (await personProvider?.find('') ?? []) as ListItemPerson[];
        const person = persons.find(person => person.id === body.personId);

        await device.addTask(body.content, body.due ? DateTime.fromISO(body.due) : undefined, person);

        return true;
    }

    return false;
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

    return await device.find(params.id);
}

export async function getItems({homey: {app}, params}: WidgetApiRequest<ListriApp, never, GetItemsParams>): Promise<ListItem[]> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return [];
    }

    return device.items;
}

export async function getPersons({homey: {app}}: WidgetApiRequest<ListriApp>): Promise<ListItemPerson[]> {
    return await app.registry
        .findAutocompleteProvider(AutocompleteProviders.Person)!
        .find('') as ListItemPerson[];
}

export async function markChecked({homey: {app}, params}: WidgetApiRequest<ListriApp, never, MarkCompleteParams>): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return false;
    }

    return await device.check(params.id);
}

export async function markUnchecked({homey: {app}, params}: WidgetApiRequest<ListriApp, never, MarkIncompleteParams>): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return false;
    }

    return await device.check(params.id, false);
}

export async function removeItem({homey: {app}, params}: WidgetApiRequest<ListriApp, never, RemoveItemParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    const item = await device.find(params.id);

    if (item?.type === 'note') {
        await device.removeNote(item.content);
        return;
    }

    if (item?.type === 'product' && device instanceof GroceryListDevice) {
        await device.removeProduct(item.content);
        return;
    }

    if (item?.type === 'task' && device instanceof BasicListDevice) {
        await device.removeTask(item.content);
        return;
    }
}

export async function updateQuantity({homey: {app}, params, body}: WidgetApiRequest<ListriApp, SetQuantityBody, SetQuantityParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device || !(device instanceof GroceryListDevice)) {
        return;
    }

    const product = await device.find(params.id);

    if (!product || product.type !== 'product') {
        return;
    }

    const quantity = await device.getProductQuantity(product.content);
    await device.setProductQuantity(product.content, quantity + body.quantity);
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
