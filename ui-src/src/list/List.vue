<template>
    <ListHeader
        v-if="look"
        :color="look.color"
        :icon="look.icon"
        :name="look.name"
        @add="onAddTap()"
        @addNote="onAddNoteTap()"/>

    <Transition
        mode="out-in"
        name="check"
        @enter="updateHeight()">
        <ListLoading v-if="isLoading && !hasItems"/>

        <ListItems v-else-if="hasItems">
            <TransitionGroup
                name="items"
                @after-enter="updateHeight()"
                @after-leave="updateHeight()">
                <template
                    v-for="(items, category, index) of categorizedItems"
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
    import useStore from './store';
    import ListAdd from './ListAdd.vue';
    import ListEdit from './ListEdit.vue';
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
        deviceId
    } = defineProps<{
        readonly deviceId: string;
    }>();

    const t = useTranslate();
    const {
        categories,
        categorizedItems,
        hasItems,
        isLoading,
        look,
        changeChecked,
        changeQuantity,
        loadCategories,
        loadItems,
        loadLook,
        removeItem,
        setItems
    } = useStore();

    const addingType = ref<ListItemTypeField | null>(null);
    const editingItem = ref<ListItemType | null>(null);

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
        const list = document.querySelector('#app')!;
        const {height} = list.getBoundingClientRect();
        Homey.setHeight(unref(addingType) ? Math.max(420, height) : height);
    }

    Homey.on('list-items-changed', async ({id, items}) => {
        if (id !== deviceId) {
            return;
        }

        await setItems(items);
    });

    Homey.on('list-look-changed', async listDeviceId => listDeviceId === deviceId && await loadLook(deviceId));

    watch([addingType, categorizedItems], async () => {
        await updateHeight();
    }, {flush: 'post'});

    watch(() => deviceId, async () => {
        await Promise.allSettled([
            loadCategories(deviceId),
            loadLook(deviceId),
            loadItems(deviceId)
        ]);
    }, {immediate: true});
</script>
