import { computed, readonly, ref, unref } from 'vue';
import type { ListItemCategoryType, ListItemType, ListLookType, PersonType, ProductListItemType, TaskListItemType, Writable } from '../types';
import { defineStore } from '../util';

export type FilterDateType = 'all' | 'today' | 'future';

export default defineStore('list', () => {
    const categories = ref<ListItemCategoryType<any>[]>([]);
    const filterDate = ref<FilterDateType>('all');
    const filterPerson = ref<string>('');
    const isLoading = ref(true);
    const items = ref<Writable<ListItemType>[]>([]);
    const look = ref<ListLookType | null>(null);
    const persons = ref<PersonType[]>([]);

    const filteredItems = computed(() => {
        const personFilter = unref(filterPerson).trim().toLowerCase();
        const dateFilter = unref(filterDate);

        if (!personFilter && dateFilter === 'all') {
            return unref(items);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return unref(items).filter(item => {
            if (item.type !== 'task') {
                return true;
            }

            if (personFilter && (!item.person || !item.person.name.toLowerCase().includes(personFilter))) {
                return false;
            }

            if (dateFilter === 'today') {
                if (!item.dueDate) return false;
                const due = new Date(item.dueDate);
                due.setHours(0, 0, 0, 0);
                return due.getTime() === today.getTime();
            }

            if (dateFilter === 'future') {
                if (!item.dueDate) return false;
                const due = new Date(item.dueDate);
                due.setHours(0, 0, 0, 0);
                return due.getTime() >= today.getTime();
            }

            return true;
        });
    });

    const categorizedItems = computed(() => {
        const grouped = Object.groupBy(unref(filteredItems), item => (item as any).category || '__other__');
        const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
            if (a === '__other__') return 1;
            if (b === '__other__') return -1;

            const ai = unref(categories).findIndex(c => c.category === a);
            const bi = unref(categories).findIndex(c => c.category === b);

            return ai - bi;
        });

        return Object.fromEntries(sortedEntries);
    });

    const hasItems = computed(() => unref(filteredItems).length > 0);

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

    async function loadCategories(deviceId: string): Promise<void> {
        isLoading.value = true;
        categories.value = await Homey.api('GET', `/${deviceId}/categories`) as ListItemCategoryType<any>[];
        isLoading.value = false;
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

    async function setFilters(person: string, date: FilterDateType): Promise<void> {
        filterPerson.value = person;
        filterDate.value = date;
    }

    return {
        categories: readonly(categories),
        filterDate: readonly(filterDate),
        filterPerson: readonly(filterPerson),
        isLoading: readonly(isLoading),
        items: readonly(items),
        look: readonly(look),
        persons: readonly(persons),

        categorizedItems,
        hasItems,

        changeChecked,
        changeQuantity,
        loadCategories,
        loadItems,
        loadLook,
        loadPersons,
        removeItem,
        setFilters,
        setItems
    };
});
