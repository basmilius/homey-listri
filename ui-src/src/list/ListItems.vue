<template>
    <div :class="$style.listItems">
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
    .listItems {
        position: relative;
        display: flex;
        margin-top: 64px;
        padding: var(--homey-su-1);
        padding-top: 0;
        flex-flow: column nowrap;
        gap: var(--homey-su-1);
        overflow: auto;
    }
</style>
