<template>
    <div :class="$style.listItemCategory">
        <FluxIcon
            v-if="icon"
            :class="$style.listItemCategoryIcon"
            :name="icon as FluxIconName"
            :size="14"/>

        <span>{{ name }}</span>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { FluxIcon } from '@flux-ui/components';
    import type { FluxIconName } from '@flux-ui/types';

    defineProps<{
        readonly icon?: string;
        readonly name: string;
    }>();
</script>

<style
    lang="scss"
    module>
    .listItemCategory {
        display: flex;
        padding: var(--homey-su-3) var(--homey-su-5) var(--homey-su-1);
        align-items: center;
        flex-flow: row nowrap;
        gap: var(--homey-su-4);
        color: var(--homey-text-color-light);

        &:first-child {
            margin-top: calc(0px - var(--homey-su-2));
            padding-top: var(--homey-su-2);
        }
    }
</style>
