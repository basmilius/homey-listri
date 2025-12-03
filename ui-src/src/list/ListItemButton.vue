<template>
    <button
        :class="$style.listItemButton"
        data-interactive
        @touchend.stop.prevent="onTap">
        <Icon
            :class="$style.listItemButtonIcon"
            :icon="icon"/>
    </button>
</template>

<script
    lang="ts"
    setup>
    import type { VNode } from 'vue';
    import { Icon } from '../components';

    const emit = defineEmits<{
        tap: [];
    }>();

    defineProps<{
        readonly icon: string;
    }>();

    defineSlots<{
        default: VNode[];
    }>();

    function onTap(): void {
        emit('tap');
    }
</script>

<style
    lang="scss"
    module>
    .listItemButton {
        display: flex;
        margin: -8px 0;
        height: 36px;
        width: 36px;
        align-items: center;
        justify-content: center;
        background: rgb(from var(--homey-color-mono-100) r g b / .5);
        border: 0;
        border-radius: 99px;

        &:active {
            background: var(--homey-color-mono-100);
        }
    }

    .listItemButtonIcon {
        --color: var(--homey-color-mono-600);
        --size: 16px;
    }

    :global(.homey-dark-mode) .listItemButton {
        background: var(--homey-color-mono-200);

        &:active {
            background: var(--homey-color-mono-100);
        }
    }
</style>
