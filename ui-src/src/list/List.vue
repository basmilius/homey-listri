<template>
    <ListHeader
        v-if="look"
        :color="look.color"
        :icon="look.icon"
        :name="look.name"/>

    <Transition
        mode="out-in"
        name="check"
        @enter="updateHeight()">
        <ScrollContainer
            v-if="items.length > 0"
            tag="div">
            <ListItems>
                <TransitionGroup
                    name="items"
                    @after-enter="updateHeight()"
                    @after-leave="updateHeight()">
                    <ListItemMount
                        v-for="item of items"
                        :key="item.id"
                        @remove="onItemRemove(item)"
                        @tap="onItemTap(item)">
                        <ListItemNote
                            v-if="item.type === 'note'"
                            :item="item"/>

                        <ListItemProduct
                            v-else-if="item.type === 'product'"
                            :item="item"
                            @decrease="decreaseQuantity(item)"
                            @increase="increaseQuantity(item)"/>

                        <ListItemTask
                            v-else-if="item.type === 'task'"
                            :item="item"/>
                    </ListItemMount>
                </TransitionGroup>
            </ListItems>
        </ScrollContainer>

        <ListItems v-else>
            <ListItemEmpty/>
        </ListItems>
    </Transition>
</template>

<script
    lang="ts"
    setup>
    import { ref, watch } from 'vue';
    import type { ListItem as ListItemData } from '../../../src/list/item.ts';
    import type { Writable } from '../../../src/types.ts';
    import { ScrollContainer } from '../components';
    import ListHeader from './ListHeader.vue';
    import ListItemEmpty from './ListItemEmpty.vue';
    import ListItemMount from './ListItemMount.vue';
    import ListItems from './ListItems.vue';
    import ListItemNote from './ListItemNote.vue';
    import ListItemProduct from './ListItemProduct.vue';
    import ListItemTask from './ListItemTask.vue';

    type Look = {
        readonly color: string;
        readonly icon: string;
        readonly name: string;
    };

    const {
        deviceId
    } = defineProps<{
        readonly deviceId: string;
    }>();

    const isLoading = ref(true);
    const items = ref<Writable<ListItemData>[]>([]);
    const look = ref<Look | null>(null);

    async function decreaseQuantity(item: ListItemData): Promise<void> {
        const index = items.value.findIndex(i => i.id === item.id);
        items.value[index]!.quantity!--;

        await Homey.api('POST', `/${deviceId}/items/${item.id}/quantity`, {
            quantity: -1
        });
    }

    async function increaseQuantity(item: ListItemData): Promise<void> {
        const index = items.value.findIndex(i => i.id === item.id);
        items.value[index]!.quantity!++;

        await Homey.api('POST', `/${deviceId}/items/${item.id}/quantity`, {
            quantity: 1
        });
    }

    async function markComplete(item: ListItemData) {
        const index = items.value.findIndex(i => i.id === item.id);
        items.value[index]!.completed = true;

        await Homey.api('POST', `/${deviceId}/items/${item.id}/complete`);
    }

    async function markIncomplete(item: ListItemData) {
        const index = items.value.findIndex(i => i.id === item.id);
        items.value[index]!.completed = false;

        await Homey.api('POST', `/${deviceId}/items/${item.id}/incomplete`);
    }

    async function onItemRemove(item: ListItemData): Promise<void> {
        const index = items.value.findIndex(i => i.id === item.id);
        items.value.splice(index, 1);

        await Homey.api('DELETE', `/${deviceId}/items/${item.id}`);
    }

    async function onItemTap(item: ListItemData): Promise<void> {
        switch (item.type) {
            case 'product':
            case 'task':
                if (item.completed) {
                    await markIncomplete(item);
                } else {
                    await markComplete(item);
                }
                break;

            default:
                break;
        }
    }

    function updateHeight(): void {
        const list = document.querySelector('#app')!;
        const {height} = list.getBoundingClientRect();
        Homey.setHeight(height);
    }

    async function updateItems(): Promise<void> {
        items.value = await Homey.api('GET', `/${deviceId}/items`) as ListItemData[];
    }

    async function updateLook(): Promise<void> {
        look.value = await Homey.api('GET', `/${deviceId}`) as Look;
    }

    Homey.on('list-items-changed', async did => {
        if (did !== deviceId) {
            return;
        }

        await updateItems();
    });

    Homey.on('list-look-changed', async did => {
        if (did !== deviceId) {
            return;
        }

        await updateLook();
    });

    watch(items, updateHeight, {flush: 'post'});

    watch(() => deviceId, async () => {
        isLoading.value = true;

        await updateLook();
        await updateItems();

        isLoading.value = false;
    }, {immediate: true});
</script>
