<template>
    <div :class="$style.listItemButtons">
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
    .listItemButtons {
        display: flex;
        margin-right: -9px;
        flex-flow: row nowrap;
        gap: var(--homey-su-1);
    }
</style>
