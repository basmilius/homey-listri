<template>
    <ListHeader
        v-if="look"
        :color="look.color"
        :has-active-filters="hasActiveFilters"
        :icon="look.icon"
        :name="look.name"
        @add="onAddTap()"
        @add-note="onAddNoteTap()"
        @filter="showFilters = !showFilters"/>

    <Transition
        mode="out-in"
        name="check"
        @enter="updateHeight()">
        <ListLoading v-if="isLoading && !hasItems"/>

        <ListItems v-else-if="hasItems">
            <Transition name="filter-slide">
                <ListFilter v-if="showFilters"/>
            </Transition>

            <TransitionGroup
                v-if="hasFilteredItems"
                name="items"
                @after-enter="updateHeight()"
                @after-leave="updateHeight()">
                <template
                    v-for="(items, category, index) of filteredCategorizedItems"
                    :key="category">
                    <ListItemCategory
                        v-if="category !== '__other__'"
                        :icon="categories.find(c => c.category === category)?.icon"
                        :name="t(`grocery.category.${category}`)"/>

                    <ListItemCategory
                        v-else-if="index > 0"
                        :name="t('widget.list.other')"/>

                    <ListItemMount
                        v-for="item of items"
                        :key="item.id"
                        @long-press="onItemEdit(item)"
                        @remove="removeItem(deviceId, item)"
                        @tap="onItemTap(item)">
                        <ListItemNote
                            v-if="item.type === 'note'"
                            :item="item as NoteListItemType"/>

                        <ListItemProduct
                            v-else-if="item.type === 'product'"
                            :item="item as ProductListItemType"
                            @decrease="changeQuantity(deviceId, item as ProductListItemType, 'decrease')"
                            @increase="changeQuantity(deviceId, item as ProductListItemType, 'increase')"/>

                        <ListItemTask
                            v-else-if="item.type === 'task'"
                            :item="item as TaskListItemType"/>
                    </ListItemMount>
                </template>
            </TransitionGroup>

            <ListItemEmpty
                v-if="!hasFilteredItems"
                :filtered="true"/>
        </ListItems>

        <ListItems v-else>
            <ListItemEmpty/>
        </ListItems>
    </Transition>

    <FluxOverlay>
        <ListAdd
            v-if="addingType"
            :device-id="deviceId"
            :type="addingType"
            @close="addingType = null"/>

        <ListEdit
            v-else-if="editingItem"
            :device-id="deviceId"
            :item="editingItem"
            @close="editingItem = null"/>
    </FluxOverlay>
</template>

<script
    lang="ts"
    setup>
    import { FluxOverlay } from '@flux-ui/components';
    import { ref, unref, watch } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListItemType, ListItemTypeField, NoteListItemType, ProductListItemType, TaskListItemType } from '../types';
    import type { ListDateFilter, ListTypeFilter } from './store';
    import useStore from './store';
    import ListAdd from './ListAdd.vue';
    import ListEdit from './ListEdit.vue';
    import ListFilter from './ListFilter.vue';
    import ListHeader from './ListHeader.vue';
    import ListLoading from './ListLoading.vue';
    import ListItemCategory from './ListItemCategory.vue';
    import ListItemEmpty from './ListItemEmpty.vue';
    import ListItemMount from './ListItemMount.vue';
    import ListItems from './ListItems.vue';
    import ListItemNote from './ListItemNote.vue';
    import ListItemProduct from './ListItemProduct.vue';
    import ListItemTask from './ListItemTask.vue';

    const {
        defaultDateFilter,
        defaultTypeFilter,
        deviceId,
        dynamicHeight,
        fixedHeight
    } = defineProps<{
        readonly defaultDateFilter: string;
        readonly defaultTypeFilter: string;
        readonly deviceId: string;
        readonly dynamicHeight: boolean;
        readonly fixedHeight: number;
    }>();

    const t = useTranslate();
    const {
        categories,
        filteredCategorizedItems,
        filters,
        hasActiveFilters,
        hasFilteredItems,
        hasItems,
        isLoading,
        look,
        changeChecked,
        changeQuantity,
        initFilters,
        loadCategories,
        loadItems,
        loadLook,
        loadPersons,
        removeItem,
        setItems
    } = useStore();

    const addingType = ref<ListItemTypeField | null>(null);
    const editingItem = ref<ListItemType | null>(null);
    const showFilters = ref(false);

    async function onAddTap(): Promise<void> {
        switch (unref(look)?.type) {
            case 'grocery_list':
                addingType.value = 'product';
                break;

            case 'list':
                addingType.value = 'task';
                break;
        }
    }

    async function onAddNoteTap(): Promise<void> {
        addingType.value = 'note';
    }

    async function onItemEdit(item: ListItemType): Promise<void> {
        editingItem.value = item;
    }

    async function onItemTap(item: ListItemType): Promise<void> {
        switch (item.type) {
            case 'product':
            case 'task':
                await changeChecked(deviceId, item, !item.checked);
                break;

            default:
                break;
        }
    }

    async function updateHeight(): Promise<void> {
        if (!dynamicHeight) {
            Homey.setHeight(Math.max(120, fixedHeight));
            return;
        }

        const list = document.querySelector('#app')!;
        const {height} = list.getBoundingClientRect();
        Homey.setHeight(unref(addingType) || unref(editingItem) ? Math.max(420, height) : height);
    }

    Homey.on('list-items-changed', async ({id, items}) => {
        if (id !== deviceId) {
            return;
        }

        await setItems(items);
    });

    Homey.on('list-look-changed', async listDeviceId => listDeviceId === deviceId && await loadLook(deviceId));

    watch([addingType, editingItem, filteredCategorizedItems, showFilters], async () => {
        await updateHeight();
    }, {flush: 'post'});

    watch(() => deviceId, async () => {
        initFilters(
            defaultTypeFilter as ListTypeFilter,
            defaultDateFilter as ListDateFilter
        );

        await Promise.allSettled([
            loadCategories(deviceId),
            loadLook(deviceId),
            loadItems(deviceId),
            loadPersons(deviceId)
        ]);
    }, {immediate: true});
</script>
