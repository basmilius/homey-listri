<template>
    <div :class="$style.listItemFooter">
        <slot/>
    </div>
</template>

<script
    lang="ts"
    setup>
    import type { VNode } from 'vue';

    defineSlots<{
        default: VNode[];
    }>();
</script>

<style
    lang="scss"
    module>
    .listItemFooter {
        display: flex;
        flex-flow: row nowrap;
        gap: var(--homey-su-4);
        justify-content: space-between;
        color: var(--homey-color-mono-600);
        font-weight: 400;
    }
</style>
