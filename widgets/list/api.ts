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

type List = ListLook & {
    readonly name: string;
};
