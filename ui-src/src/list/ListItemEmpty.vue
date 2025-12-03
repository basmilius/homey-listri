<template>
    <ListItem
        :class="$style.listItemEmpty"
        icon="">
        <ListItemContent>
            {{ t('widget.list.no_items') }}
        </ListItemContent>
    </ListItem>
</template>

<script
    lang="ts"
    setup>
    import { useTranslate } from '../composables';
    import ListItem from './ListItem.vue';
    import ListItemContent from './ListItemContent.vue';

    const t = useTranslate();
</script>

<style
    lang="scss"
    module>
    .listItemEmpty {
        background: var(--homey-color-mono-025);
        font-weight: 400;

        [data-icon] {
            --color: var(--sky);
        }
    }

    :global(.homey-dark-mode) .listItemEmpty {
        background: rgb(from var(--homey-color-mono-100) r g b / .5);
    }
</style>
