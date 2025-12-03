<template>
    <div
        :class="grow ? $style.listItemContentGrow : $style.listItemContent"
        data-content>
        <slot/>
    </div>
</template>

<script
    lang="ts"
    setup>
    import type { VNode } from 'vue';

    defineProps<{
        readonly grow?: boolean;
    }>();

    defineSlots<{
        default: VNode[];
    }>();
</script>

<style
    lang="scss"
    module>
    .listItemContent {
        margin-top: -2px;
        margin-bottom: -2px;
        line-height: 24px;
        text-decoration: line-through;
        text-decoration-color: transparent;
        text-decoration-thickness: 2px;
        transition: 150ms var(--swift-out);
    }

    .listItemContentGrow {
        composes: listItemContent;

        flex-grow: 1;
    }
</style>
