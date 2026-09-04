import { AutocompleteProviders } from '../flow';
import type { ListDevice, ListItem, ListItemCategory, ListItemPerson, ListItemType } from '../list';
import { BasicListDevice, GROCERY_LIST_CATEGORIES, GroceryListDevice } from '../list';
import type { ListriApp, ListView } from '../types';

export async function addItem(app: ListriApp, deviceId: string, body: AddItemBody): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device || !isContent(body?.content) || !isQuantity(body.quantity)) {
        return false;
    }

    if (body.type === 'note') {
        await device.addNote(body.content);

        return true;
    }

    if (body.type === 'product' && device instanceof GroceryListDevice) {
        await device.addProduct(body.content, body.quantity, body.category);

        return true;
    }

    if (body.type === 'task' && device instanceof BasicListDevice) {
        await device.addTask(body.content, body.dueDate, body.dueTime, await findPerson(app, body.personId));

        return true;
    }

    return false;
}

export async function changeQuantity(app: ListriApp, deviceId: string, id: string, change: number): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!(device instanceof GroceryListDevice) || !Number.isFinite(change)) {
        return false;
    }

    return await device.changeProductQuantityById(id, change);
}

export async function checkItem(app: ListriApp, deviceId: string, id: string, checked: boolean): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return false;
    }

    return await device.check(id, checked);
}

export async function clearList(app: ListriApp, deviceId: string): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return false;
    }

    await device.clear();

    return true;
}

/** Replaces the item: a field the body leaves out is cleared, not kept. */
export async function editItem(app: ListriApp, deviceId: string, id: string, body: EditItemBody): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device || !isContent(body?.content) || !isQuantity(body.quantity)) {
        return false;
    }

    const item = await device.find(id);

    if (!item) {
        return false;
    }

    if (item.type === 'note') {
        return await device.editNote(item.id, body.content);
    }

    if (item.type === 'product' && device instanceof GroceryListDevice) {
        return await device.editProduct(item.id, body.content, body.quantity, body.category);
    }

    if (item.type === 'task' && device instanceof BasicListDevice) {
        return await device.editTask(item.id, body.content, body.dueDate, body.dueTime, await findPerson(app, body.personId));
    }

    return false;
}

export async function getCategories(): Promise<readonly ListItemCategory<any>[]> {
    return GROCERY_LIST_CATEGORIES;
}

export async function getItem(app: ListriApp, deviceId: string, id: string): Promise<ListItem | null> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return null;
    }

    return await device.find(id);
}

export async function getItems(app: ListriApp, deviceId: string): Promise<ListItem[]> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return [];
    }

    return device.items;
}

export async function getList(app: ListriApp, deviceId: string): Promise<ListView | null> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return null;
    }

    return await view(device);
}

export async function getLists(app: ListriApp): Promise<ListView[]> {
    const drivers = await app.getDrivers();
    const devices = drivers.flatMap(driver => driver.getDevices() as ListDevice[]);
    const lists = await Promise.all(devices.map(view));

    return lists.toSorted((a, b) => a.name.localeCompare(b.name));
}

export async function getPersons(app: ListriApp): Promise<ListItemPerson[]> {
    const provider = app.registry.findAutocompleteProvider(AutocompleteProviders.Person);

    return (await provider?.find('') ?? []) as ListItemPerson[];
}

export async function removeChecked(app: ListriApp, deviceId: string): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return false;
    }

    await device.removeChecked();

    return true;
}

export async function removeItem(app: ListriApp, deviceId: string, id: string): Promise<boolean> {
    const device = await app.getDevice<ListDevice>(deviceId);

    if (!device) {
        return false;
    }

    return await device.removeItem(id);
}

function isContent(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

function isQuantity(value: unknown): boolean {
    return value === undefined || (typeof value === 'number' && Number.isFinite(value) && value >= 1);
}

async function findPerson(app: ListriApp, personId?: string): Promise<ListItemPerson | undefined> {
    if (!personId) {
        return undefined;
    }

    const persons = await getPersons(app);

    return persons.find(person => person.id === personId);
}

async function view(device: ListDevice): Promise<ListView> {
    const look = await device.getLook();
    const checkable = device.items.filter(item => 'checked' in item);

    return {
        ...look,
        id: device.id,
        name: device.name,
        type: device.driver.id,
        total: device.items.length,
        checked: checkable.filter(item => (item as { checked: boolean }).checked).length,
        open: checkable.filter(item => !(item as { checked: boolean }).checked).length
    };
}

export type AddItemBody = {
    readonly type: ListItemType;
    readonly category?: string;
    readonly content: string;
    readonly personId?: string;
    readonly dueDate?: string;
    readonly dueTime?: string;
    readonly quantity?: number;
};

export type EditItemBody = {
    readonly category?: string;
    readonly content: string;
    readonly personId?: string;
    readonly dueDate?: string;
    readonly dueTime?: string;
    readonly quantity?: number;
};
