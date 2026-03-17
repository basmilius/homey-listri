import { computed, readonly, ref, unref } from 'vue';
import type { ListItemCategoryType, ListItemType, ListLookType, PersonType, ProductListItemType, TaskListItemType, Writable } from '../types';
import { defineStore } from '../util';

export type ListDateFilter = 'all' | 'overdue' | 'upcoming' | 'no_date';
export type ListTypeFilter = 'all' | 'note' | 'product' | 'task';

export type ListFilterState = {
    date: ListDateFilter;
    type: ListTypeFilter;
    personId: string | null;
};

function todayString(): string {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export default defineStore('list', () => {
    const categories = ref<ListItemCategoryType<any>[]>([]);
    const filters = ref<ListFilterState>({
        date: 'all',
        type: 'all',
        personId: null
    });
    const isLoading = ref(true);
    const items = ref<Writable<ListItemType>[]>([]);
    const look = ref<ListLookType | null>(null);
    const persons = ref<PersonType[]>([]);

    const filteredItems = computed(() => {
        const state = unref(filters);
        const today = todayString();

        return unref(items).filter(item => {
            if (state.type !== 'all' && item.type !== state.type) {
                return false;
            }

            if (state.date !== 'all') {
                const dueDate = item.type === 'task' ? (item as TaskListItemType).dueDate : undefined;

                if (state.date === 'no_date') {
                    if (dueDate) {
                        return false;
                    }
                } else {
                    if (!dueDate) {
                        return false;
                    }

                    if (state.date === 'overdue' && dueDate >= today) {
                        return false;
                    }

                    if (state.date === 'upcoming' && dueDate < today) {
                        return false;
                    }
                }
            }

            if (state.personId !== null) {
                if (item.type !== 'task') {
                    return false;
                }

                if ((item as TaskListItemType).person?.id !== state.personId) {
                    return false;
                }
            }

            return true;
        });
    });

    const categorizedItems = computed(() => categorize(unref(items)));

    const filteredCategorizedItems = computed(() => categorize(unref(filteredItems)));

    const hasActiveFilters = computed(() => {
        const state = unref(filters);
        return state.date !== 'all' || state.type !== 'all' || state.personId !== null;
    });

    const hasFilteredItems = computed(() => unref(filteredItems).length > 0);

    const hasItems = computed(() => unref(items).length > 0);

    function categorize(sourceItems: Writable<ListItemType>[]) {
        const grouped = Object.groupBy(sourceItems, item => (item as any).category || '__other__');
        const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
            if (a === '__other__') return 1;
            if (b === '__other__') return -1;

            const ai = unref(categories).findIndex(c => c.category === a);
            const bi = unref(categories).findIndex(c => c.category === b);

            return ai - bi;
        });

        return Object.fromEntries(sortedEntries);
    }

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

    function initFilters(defaultTypeFilter?: ListTypeFilter, defaultDateFilter?: ListDateFilter): void {
        filters.value = {
            date: defaultDateFilter ?? 'all',
            type: defaultTypeFilter ?? 'all',
            personId: null
        };
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

    function resetFilters(): void {
        filters.value = {
            date: 'all',
            type: 'all',
            personId: null
        };
    }

    function setFilter<K extends keyof ListFilterState>(key: K, value: ListFilterState[K]): void {
        filters.value = {
            ...unref(filters),
            [key]: value
        };
    }

    async function setItems(newItems: ListItemType[]): Promise<void> {
        items.value = newItems;
    }

    return {
        categories: readonly(categories),
        filters: readonly(filters),
        isLoading: readonly(isLoading),
        items: readonly(items),
        look: readonly(look),
        persons: readonly(persons),

        categorizedItems,
        filteredCategorizedItems,
        filteredItems,
        hasActiveFilters,
        hasFilteredItems,
        hasItems,

        changeChecked,
        changeQuantity,
        initFilters,
        loadCategories,
        loadItems,
        loadLook,
        loadPersons,
        removeItem,
        resetFilters,
        setFilter,
        setItems
    };
});
