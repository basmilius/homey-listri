<template>
    <ListHeader
        v-if="look"
        :color="look.color"
        :icon="look.icon"
        :name="look.name"
        @add="onAddTap()"/>

    <Transition
        mode="out-in"
        name="check"
        @enter="updateHeight()">
        <ListItems v-if="isLoading && !hasItems">
            <FluxSpinner/>
        </ListItems>

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
                        :name="category as string"/>

                    <ListItemCategory
                        v-else-if="index > 0"
                        :name="t('widget.list.other')"/>

                    <ListItemMount
                        v-for="item of items"
                        :key="item.id"
                        @long-press="onItemTap(item)"
                        @remove="removeItem(deviceId, item)"
                        @tap="onItemTap(item)">
                        <ListItemNote
                            v-if="item.type === 'note'"
                            :item="item"/>

                        <ListItemProduct
                            v-else-if="item.type === 'product'"
                            :item="item"
                            @decrease="changeQuantity(deviceId, item, 'decrease')"
                            @increase="changeQuantity(deviceId, item, 'increase')"/>

                        <ListItemTask
                            v-else-if="item.type === 'task'"
                            :item="item"/>
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
            v-if="isAdding"
            :device-id="deviceId"
            @close="isAdding = false"/>
    </FluxOverlay>
</template>

<script
    lang="ts"
    setup>
    import { FluxOverlay, FluxSpinner } from '@flux-ui/components';
    import { ref, unref, watch } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListItemType } from '../types';
    import useStore from './store';
    import ListAdd from './ListAdd.vue';
    import ListHeader from './ListHeader.vue';
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
        categorizedItems,
        hasItems,
        isLoading,
        look,
        changeChecked,
        changeQuantity,
        loadItems,
        loadLook,
        removeItem,
        setItems
    } = useStore();

    const isAdding = ref(false);

    async function onAddTap(): Promise<void> {
        isAdding.value = true;
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
        Homey.setHeight(unref(isAdding) ? Math.max(420, height) : height);
    }

    Homey.on('list-items-changed', async ({id, items}) => {
        if (id !== deviceId) {
            return;
        }

        await setItems(items);
    });

    Homey.on('list-look-changed', async listDeviceId => listDeviceId === deviceId && await loadLook(deviceId));

    watch([isAdding, categorizedItems], async () => {
        await updateHeight();
    }, {flush: 'post'});

    watch(() => deviceId, async () => {
        await loadLook(deviceId);
        await loadItems(deviceId);
    }, {immediate: true});
</script>
