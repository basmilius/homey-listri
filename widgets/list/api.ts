import type { WidgetApiRequest } from '@basmilius/homey-common';
import type { AddItemBody, EditItemBody } from '../../src/api';
import * as lists from '../../src/api';
import type { ListItem, ListItemCategory, ListItemPerson } from '../../src/list';
import type { ListriApp, ListView } from '../../src/types';

export async function addItem({homey: {app}, params, body}: WidgetApiRequest<ListriApp, AddItemBody, DeviceParams>): Promise<boolean> {
    return await lists.addItem(app, params.deviceId, body);
}

export async function editItem({homey: {app}, params, body}: WidgetApiRequest<ListriApp, EditItemBody, ItemParams>): Promise<boolean> {
    return await lists.editItem(app, params.deviceId, params.id, body);
}

export async function get({homey: {app}, params}: WidgetApiRequest<ListriApp, never, DeviceParams>): Promise<ListView | null> {
    return await lists.getList(app, params.deviceId);
}

export async function getCategories(): Promise<readonly ListItemCategory<any>[]> {
    return await lists.getCategories();
}

export async function getItem({homey: {app}, params}: WidgetApiRequest<ListriApp, never, ItemParams>): Promise<ListItem | null> {
    return await lists.getItem(app, params.deviceId, params.id);
}

export async function getItems({homey: {app}, params}: WidgetApiRequest<ListriApp, never, DeviceParams>): Promise<ListItem[]> {
    return await lists.getItems(app, params.deviceId);
}

export async function getPersons({homey: {app}}: WidgetApiRequest<ListriApp>): Promise<ListItemPerson[]> {
    return await lists.getPersons(app);
}

export async function markChecked({homey: {app}, params}: WidgetApiRequest<ListriApp, never, ItemParams>): Promise<boolean> {
    return await lists.checkItem(app, params.deviceId, params.id, true);
}

export async function markUnchecked({homey: {app}, params}: WidgetApiRequest<ListriApp, never, ItemParams>): Promise<boolean> {
    return await lists.checkItem(app, params.deviceId, params.id, false);
}

export async function removeItem({homey: {app}, params}: WidgetApiRequest<ListriApp, never, ItemParams>): Promise<void> {
    await lists.removeItem(app, params.deviceId, params.id);
}

export async function updateQuantity({homey: {app}, params, body}: WidgetApiRequest<ListriApp, QuantityBody, ItemParams>): Promise<void> {
    await lists.changeQuantity(app, params.deviceId, params.id, body.quantity);
}

type DeviceParams = {
    readonly deviceId: string;
};

type ItemParams = {
    readonly deviceId: string;
    readonly id: string;
};

type QuantityBody = {
    readonly quantity: number;
};
