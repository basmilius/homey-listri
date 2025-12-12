<template>
    <div :class="$style.listHeader">
        <Icon
            :class="$style.listHeaderIcon"
            :icon="icon"
            :style="{
                '--color': color
            }"/>

        <div
            class="homey-text-bold"
            :class="$style.listHeaderName">
            {{ name }}
        </div>

        <button
            :class="$style.listHeaderAdd"
            @click="onAddNoteTap()">
            <Icon
                :class="$style.listHeaderAddIcon"
                icon=""/>
        </button>

        <button
            :class="$style.listHeaderAdd"
            @click="onAddTap()">
            <Icon
                :class="$style.listHeaderAddIcon"
                icon=""/>
        </button>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { Icon } from '../components';

    const emit = defineEmits<{
        add: [];
        addNote: [];
    }>();

    defineProps<{
        readonly color: string;
        readonly icon: string;
        readonly name: string;
    }>();

    function onAddTap(): void {
        emit('add');
    }

    function onAddNoteTap(): void {
        emit('addNote');
    }
</script>

<style
    lang="scss"
    module>
    .listHeader {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        padding: var(--homey-su-5);
        align-items: center;
        flex-flow: row nowrap;
        justify-content: flex-start;
        gap: var(--homey-su-4);
        background: linear-gradient(to bottom, var(--homey-background-color) 75%, rgb(from var(--homey-background-color) r g b / 0));
        z-index: 10;
    }

    .listHeaderIcon {
        --size: 20px;
    }

    .listHeaderName {
        flex-grow: 1;
    }

    .listHeaderAdd {
        display: flex;
        margin: -11px;
        height: 42px;
        width: 42px;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 0;
        border-radius: var(--homey-border-radius-small);
        outline: 0;
        transition: background 150ms var(--swift-out);
    }

    .listHeaderAdd:active {
        background: var(--homey-color-mono-100);
    }

    .listHeaderAddIcon {
        --color: var(--homey-color-mono-600);
        --size: 20px;
    }
</style>
