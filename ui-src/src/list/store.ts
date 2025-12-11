import { computed, readonly, ref, unref } from 'vue';
import { type ListItemType, type ListLookType, type PersonType, type ProductListItemType, type TaskListItemType, type Writable } from '../types';
import { defineStore } from '../util';

export default defineStore('list', () => {
    const isLoading = ref(true);
    const items = ref<Writable<ListItemType>[]>([]);
    const look = ref<ListLookType | null>(null);
    const persons = ref<PersonType[]>([]);

    const categorizedItems = computed(() => {
        const grouped = Object.groupBy(unref(items), item => (item as any).category ?? '__other__');
        const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
            if (a === '__other__') return 1;
            if (b === '__other__') return -1;
            return a.localeCompare(b);
        });
        return Object.fromEntries(sortedEntries);
    });

    const hasItems = computed(() => unref(items).length > 0);

    async function changeChecked(deviceId: string, item: ProductListItemType | TaskListItemType, checked: boolean): Promise<void> {
        const index = unref(items).findIndex(i => i.id === item.id);

        if (index === -1) {
            return;
        }

        (items.value[index] as ProductListItemType | TaskListItemType).checked = checked;

        if (checked) {
            await Homey.api('POST', `/${deviceId}/items/${item.id}/checked`);
        } else {
            await Homey.api('POST', `/${deviceId}/items/${item.id}/unchecked`);
        }
    }

    async function changeQuantity(deviceId: string, item: ProductListItemType, change: 'decrease' | 'increase'): Promise<void> {
        const index = unref(items).findIndex(i => i.id === item.id);

        if (index === -1 || item.quantity === undefined) {
            return;
        }

        (items.value[index] as ProductListItemType).quantity = change === 'increase'
            ? item.quantity + 1
            : item.quantity - 1;

        await Homey.api('POST', `/${deviceId}/items/${item.id}/quantity`, {
            quantity: change === 'increase' ? 1 : -1
        });
    }

    async function loadItems(deviceId: string): Promise<void> {
        isLoading.value = true;

        await setItems(
            await Homey.api('GET', `/${deviceId}/items`) as ListItemType[]
        );

        isLoading.value = false;
    }

    async function loadLook(deviceId: string): Promise<void> {
        isLoading.value = true;
        look.value = await Homey.api('GET', `/${deviceId}`) as ListLookType;
        isLoading.value = false;
    }

    async function loadPersons(deviceId: string): Promise<void> {
        isLoading.value = true;
        persons.value = await Homey.api('GET', `/${deviceId}/persons`) as PersonType[];
        isLoading.value = false;
    }

    async function removeItem(deviceId: string, item: ListItemType): Promise<void> {
        const index = unref(items).findIndex(i => i.id === item.id);

        if (index === -1) {
            return;
        }

        items.value.splice(index, 1);

        await Homey.api('DELETE', `/${deviceId}/items/${item.id}`);
    }

    async function setItems(newItems: ListItemType[]): Promise<void> {
        items.value = newItems;
    }

    return {
        isLoading: readonly(isLoading),
        items: readonly(items),
        look: readonly(look),
        persons: readonly(persons),

        categorizedItems,
        hasItems,

        changeChecked,
        changeQuantity,
        loadItems,
        loadLook,
        loadPersons,
        removeItem,
        setItems
    };
});
