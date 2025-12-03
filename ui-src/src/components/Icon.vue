<template>
    <div
        :class="$style.icon"
        data-icon
        :style="{
            '--icon': JSON.stringify(icon),
            '--icon-secondary': JSON.stringify(icon + icon)
        }"/>
</template>

<script
    lang="ts"
    setup>
    defineProps<{
        readonly icon: string;
    }>();
</script>

<style
    lang="scss"
    module>
    .icon {
        --color: #64748b;
        --icon: '';
        --icon-secondary: '';
        --size: 42px;

        display: grid;
        height: var(--size);
        width: var(--size);
        align-items: center;
        justify-content: center;
    }

    .icon::before,
    .icon::after {
        grid-column: 1;
        grid-row: 1;
        color: var(--color);
        font-family: 'font-awesome', sans-serif;
        font-size: var(--size);
        translate: 0 calc(var(--size) * -.1);
    }

    .icon::before {
        content: var(--icon);
    }

    .icon::after {
        content: var(--icon-secondary);
        opacity: .2;
    }
</style>
