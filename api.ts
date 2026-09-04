import type { ApiRequest } from '@basmilius/homey-common';
import type { AddItemBody, EditItemBody } from './src/api';
import * as lists from './src/api';
import type { ListItem, ListItemCategory, ListItemPerson } from './src/list';
import type { ListriApp, ListView } from './src/types';

/** Every list with its look and its counts, so a client can draw an overview without asking per device. */
export async function getLists({homey: {app}}: ApiRequest<ListriApp>): Promise<ListView[]> {
    return await lists.getLists(app);
}

export async function getList({homey: {app}, params}: ApiRequest<ListriApp, never, DeviceParams>): Promise<ListView | null> {
    return await lists.getList(app, params.deviceId);
}

export async function getItems({homey: {app}, params}: ApiRequest<ListriApp, never, DeviceParams>): Promise<ListItem[]> {
    return await lists.getItems(app, params.deviceId);
}

export async function getItem({homey: {app}, params}: ApiRequest<ListriApp, never, ItemParams>): Promise<ListItem | null> {
    return await lists.getItem(app, params.deviceId, params.id);
}

export async function getCategories(): Promise<readonly ListItemCategory<any>[]> {
    return await lists.getCategories();
}

export async function getPersons({homey: {app}}: ApiRequest<ListriApp>): Promise<ListItemPerson[]> {
    return await lists.getPersons(app);
}

export async function addItem({homey: {app}, params, body}: ApiRequest<ListriApp, AddItemBody, DeviceParams>): Promise<boolean> {
    return await lists.addItem(app, params.deviceId, body);
}

export async function editItem({homey: {app}, params, body}: ApiRequest<ListriApp, EditItemBody, ItemParams>): Promise<boolean> {
    return await lists.editItem(app, params.deviceId, params.id, body);
}

export async function checkItem({homey: {app}, params}: ApiRequest<ListriApp, never, ItemParams>): Promise<boolean> {
    return await lists.checkItem(app, params.deviceId, params.id, true);
}

export async function uncheckItem({homey: {app}, params}: ApiRequest<ListriApp, never, ItemParams>): Promise<boolean> {
    return await lists.checkItem(app, params.deviceId, params.id, false);
}

/** The body carries the change, not the new number, so two clients counting at once do not undo each other. */
export async function changeQuantity({homey: {app}, params, body}: ApiRequest<ListriApp, QuantityBody, ItemParams>): Promise<boolean> {
    return await lists.changeQuantity(app, params.deviceId, params.id, body.quantity);
}

export async function removeItem({homey: {app}, params}: ApiRequest<ListriApp, never, ItemParams>): Promise<boolean> {
    return await lists.removeItem(app, params.deviceId, params.id);
}

export async function removeChecked({homey: {app}, params}: ApiRequest<ListriApp, never, DeviceParams>): Promise<boolean> {
    return await lists.removeChecked(app, params.deviceId);
}

export async function clearList({homey: {app}, params}: ApiRequest<ListriApp, never, DeviceParams>): Promise<boolean> {
    return await lists.clearList(app, params.deviceId);
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
