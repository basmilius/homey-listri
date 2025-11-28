import type { WidgetApiRequest } from '@basmilius/homey-common';
import type { ListDevice, ListItem } from '../../src/list';
import type { ListLook, ListriApp } from '../../src/types';

export async function get({homey: {app}, params}: WidgetApiRequest<ListriApp, never, GetParams>): Promise<List | null> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return null;
    }

    const look = await device.getLook();

    return {
        ...look,
        name: device.getName()
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

export async function markItemAsDone({homey: {app}, params}: WidgetApiRequest<ListriApp, never, MarkItemAsDoneParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    await device.markAsDone(params.id);
}

export async function markItemAsOpen({homey: {app}, params}: WidgetApiRequest<ListriApp, never, MarkItemAsOpenParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    await device.markAsOpen(params.id);
}

export async function removeItem({homey: {app}, params}: WidgetApiRequest<ListriApp, never, RemoveItemParams>): Promise<void> {
    const device = await app.getDevice<ListDevice>(params.deviceId);

    if (!device) {
        return;
    }

    await device.removeItem(params.id);
}

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

type MarkItemAsDoneParams = {
    readonly deviceId: string;
    readonly id: string;
};

type MarkItemAsOpenParams = {
    readonly deviceId: string;
    readonly id: string;
};

type RemoveItemParams = {
    readonly deviceId: string;
    readonly id: string;
};

type List = ListLook & {
    readonly name: string;
};
