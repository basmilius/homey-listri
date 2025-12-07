<template>
    <div :class="$style.listItemCategory">
        {{ name }}
    </div>
</template>

<script
    lang="ts"
    setup>
    defineProps<{
        readonly name: string;
    }>();
</script>

<style
    lang="scss"
    module>
    .listItemCategory {
        padding: var(--homey-su-4) var(--homey-su-4) var(--homey-su-2);
        color: var(--homey-text-color-light);

        &:first-child {
            padding-top: var(--homey-su-2);
        }
    }
</style>
