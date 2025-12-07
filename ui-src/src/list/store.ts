import { computed, readonly, ref, unref } from 'vue';
import type { ListItemType, ListLookType, PersonType, Writable } from '../types';
import { defineStore } from '../util';

export default defineStore('list', () => {
    const isLoading = ref(true);
    const items = ref<Writable<ListItemType>[]>([]);
    const look = ref<ListLookType | null>(null);
    const persons = ref<PersonType[]>([]);

    const categorizedItems = computed(() => {
        const grouped = Object.groupBy(unref(items), item => item.category ?? '__other__');
        const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
            if (a === '__other__') return 1;
            if (b === '__other__') return -1;
            return a.localeCompare(b);
        });
        return Object.fromEntries(sortedEntries);
    });

    const hasItems = computed(() => unref(items).length > 0);

    async function changeCompleted(deviceId: string, item: ListItemType, completed: boolean): Promise<void> {
        const index = unref(items).findIndex(i => i.id === item.id);

        if (index === -1) {
            return;
        }

        items.value[index]!.completed = completed;

        if (completed) {
            await Homey.api('POST', `/${deviceId}/items/${item.id}/complete`);
        } else {
            await Homey.api('POST', `/${deviceId}/items/${item.id}/incomplete`);
        }
    }

    async function changeQuantity(deviceId: string, item: ListItemType, change: 'decrease' | 'increase'): Promise<void> {
        const index = unref(items).findIndex(i => i.id === item.id);

        if (index === -1 || item.quantity === undefined) {
            return;
        }

        items.value[index]!.quantity = change === 'increase'
            ? item.quantity + 1
            : item.quantity - 1;

        await Homey.api('POST', `/${deviceId}/items/${item.id}/quantity`, {
            quantity: change === 'increase' ? 1 : -1
        });
    }

    async function loadItems(deviceId: string): Promise<void> {
        isLoading.value = true;
        items.value = await Homey.api('GET', `/${deviceId}/items`) as ListItemType[];
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

    return {
        isLoading: readonly(isLoading),
        items: readonly(items),
        look: readonly(look),
        persons: readonly(persons),

        categorizedItems,
        hasItems,

        changeCompleted,
        changeQuantity,
        loadItems,
        loadLook,
        loadPersons,
        removeItem
    };
});
