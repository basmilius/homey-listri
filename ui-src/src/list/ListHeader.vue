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
            v-if="canFilter"
            :aria-label="t('widget.list.filter.title')"
            :class="$style.listHeaderAction"
            @click="onFilterTap()">
            <Icon
                :class="$style.listHeaderActionIcon"
                icon=""
                :style="hasActiveFilters ? {'--color': color} : undefined"/>
        </button>

        <button
            :class="$style.listHeaderAction"
            @click="onAddNoteTap()">
            <Icon
                :class="$style.listHeaderActionIcon"
                icon=""/>
        </button>

        <button
            :class="$style.listHeaderAction"
            @click="onAddTap()">
            <Icon
                :class="$style.listHeaderActionIcon"
                icon=""/>
        </button>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { Icon } from '../components';
    import { useTranslate } from '../composables';

    const emit = defineEmits<{
        add: [];
        addNote: [];
        filter: [];
    }>();

    defineProps<{
        readonly canFilter: boolean;
        readonly color: string;
        readonly hasActiveFilters: boolean;
        readonly icon: string;
        readonly name: string;
    }>();

    const t = useTranslate();

    function onAddTap(): void {
        emit('add');
    }

    function onAddNoteTap(): void {
        emit('addNote');
    }

    function onFilterTap(): void {
        emit('filter');
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

    .listHeaderAction {
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

    .listHeaderAction:active {
        background: var(--homey-color-mono-100);
    }

    .listHeaderActionIcon {
        --color: var(--homey-color-mono-600);
        --size: 20px;
    }
</style>
