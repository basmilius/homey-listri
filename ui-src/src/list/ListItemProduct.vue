<template>
    <ListItem
        completable
        tappable
        :icon="item.completed ? '' : ''"
        :item="item"
        direction="horizontal">
        <ListItemQuantity
            v-if="item.quantity && item.quantity > 1"
            :quantity="item.quantity"/>

        <ListItemContent grow>
            {{ item.content }}
        </ListItemContent>

        <Transition name="check">
            <ListItemButtons v-if="!item.completed">
                <ListItemButton
                    v-if="item.quantity && item.quantity > 1"
                    icon=""
                    @tap="decrease()"/>

                <ListItemButton
                    icon="+"
                    @tap="increase()"/>
            </ListItemButtons>
        </Transition>
    </ListItem>
</template>

<script
    lang="ts"
    setup>
    import type { ListItem as ListItemData } from '../../../src/list/item.ts';
    import ListItem from './ListItem.vue';
    import ListItemButton from './ListItemButton.vue';
    import ListItemButtons from './ListItemButtons.vue';
    import ListItemContent from './ListItemContent.vue';
    import ListItemQuantity from './ListItemQuantity.vue';

    const emit = defineEmits<{
        decrease: [];
        increase: [];
    }>();

    defineProps<{
        readonly item: ListItemData;
    }>();

    function decrease(): void {
        emit('decrease');
    }

    function increase(): void {
        emit('increase');
    }
</script>
