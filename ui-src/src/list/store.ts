import { computed, readonly, ref, unref } from 'vue';
import { useToday } from '../composables';
import type { ListItemCategoryType, ListItemType, ListLookType, PersonType, ProductListItemType, TaskListItemType, Writable } from '../types';
import { defineStore, dueDateTime } from '../util';

export type ListDateFilter = 'all' | 'due_by_today' | 'upcoming' | 'no_date';
export type ListTypeFilter = 'all' | 'note' | 'product' | 'task';

type ListFilterState = {
    date: ListDateFilter;
    type: ListTypeFilter;
    personId: string | null;
};

const NEUTRAL_FILTERS: ListFilterState = {
    date: 'all',
    type: 'all',
    personId: null
};

export function toDateFilter(value: unknown): ListDateFilter {
    return value === 'no_date' || value === 'due_by_today' || value === 'upcoming' ? value : 'all';
}

export function toTypeFilter(value: unknown): ListTypeFilter {
    return value === 'note' || value === 'product' || value === 'task' ? value : 'all';
}

export default defineStore('list', () => {
    const categories = ref<ListItemCategoryType<any>[]>([]);
    const filters = ref<ListFilterState>({...NEUTRAL_FILTERS});
    const isLoading = ref(true);
    const items = ref<Writable<ListItemType>[]>([]);
    const look = ref<ListLookType | null>(null);
    const persons = ref<PersonType[]>([]);

    const today = useToday();

    const availableTypeFilters = computed<ListTypeFilter[]>(() => unref(look)?.type === 'grocery_list'
        ? ['all', 'note', 'product']
        : ['all', 'note', 'task']);

    const canFilterByTaskFields = computed(() => hasTaskFields(unref(filters).type));

    const filteredItems = computed(() => {
        const state = unref(filters);
        const startOfToday = unref(today);

        // Only tasks carry a due date and a person, so either filter narrows the list to tasks.
        const isTaskOnly = state.date !== 'all' || state.personId !== null;

        return unref(items).filter(item => {
            if (state.type !== 'all' && item.type !== state.type) {
                return false;
            }

            if (item.type !== 'task') {
                return !isTaskOnly;
            }

            if (state.personId !== null && item.person?.id !== state.personId) {
                return false;
            }

            if (state.date === 'all') {
                return true;
            }

            const due = item.dueDate ? dueDateTime(item.dueDate, item.dueTime) : undefined;
            const dueDay = due?.isValid ? due.startOf('day') : undefined;

            if (state.date === 'no_date') {
                return dueDay === undefined;
            }

            if (dueDay === undefined) {
                return false;
            }

            return state.date === 'due_by_today'
                ? dueDay <= startOfToday
                : dueDay > startOfToday;
        });
    });

    const filteredCategorizedItems = computed(() => categorize(unref(filteredItems)));

    const hasActiveFilters = computed(() => {
        const state = unref(filters);

        return state.date !== NEUTRAL_FILTERS.date || state.type !== NEUTRAL_FILTERS.type || state.personId !== NEUTRAL_FILTERS.personId;
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

    function hasTaskFields(type: ListTypeFilter): boolean {
        return unref(availableTypeFilters).includes('task') && (type === 'all' || type === 'task');
    }

    // Runs before the look is known, so the defaults are only sanitized once loadLook has the list type.
    function initFilters(defaultTypeFilter: ListTypeFilter, defaultDateFilter: ListDateFilter): void {
        filters.value = {
            date: defaultDateFilter,
            type: defaultTypeFilter,
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

        setFilters(unref(filters));

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
        filters.value = {...NEUTRAL_FILTERS};
    }

    function setFilter<K extends keyof ListFilterState>(key: K, value: ListFilterState[K]): void {
        setFilters({
            ...unref(filters),
            [key]: value
        });
    }

    function setFilters(state: ListFilterState): void {
        const type = unref(availableTypeFilters).includes(state.type) ? state.type : 'all';
        const canFilterByTask = hasTaskFields(type);

        filters.value = {
            date: canFilterByTask ? state.date : 'all',
            type,
            personId: canFilterByTask ? state.personId : null
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

        availableTypeFilters,
        canFilterByTaskFields,
        filteredCategorizedItems,
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
