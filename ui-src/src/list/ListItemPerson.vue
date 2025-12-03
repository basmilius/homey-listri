<template>
    <div :class="$style.listItemPerson">
        <img
            v-if="image"
            :class="$style.listItemPersonImage"
            :src="image"
            :alt="name">

        <span>{{ name }}</span>
    </div>
</template>

<script
    lang="ts"
    setup>
    defineProps<{
        readonly image?: string;
        readonly name: string;
    }>();
</script>

<style
    lang="scss"
    module>
    .listItemPerson {
        display: flex;
        align-items: center;
        gap: var(--homey-su-2);
        justify-content: flex-start;
        font-size: 15px;
    }

    .listItemPersonImage {
        height: 18px;
        width: 18px;
        border-radius: 99px;
    }
</style>
