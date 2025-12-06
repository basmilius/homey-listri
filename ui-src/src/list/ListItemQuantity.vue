<template>
    <div :class="$style.listItemQuantity">
        {{ value }}x
    </div>
</template>

<script
    lang="ts"
    setup>
    import { computed } from 'vue';

    const {
        quantity
    } = defineProps<{
        readonly quantity: number;
    }>();

    const formatter = new Intl.NumberFormat(navigator.language, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const value = computed(() => formatter.format(quantity));
</script>

<style
    lang="scss"
    module>
    .listItemQuantity {
        padding: 0 var(--homey-su-2);
        align-self: start;
        background: rgb(from var(--homey-color-mono-100) r g b / .5);
        border-radius: 99px;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
    }

    :global(.homey-dark-mode) .listItemQuantity {
        background: var(--homey-color-mono-200);
    }
</style>
