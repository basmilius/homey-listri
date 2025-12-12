<template>
    <ListItem
        :class="$style.listItemNote"
        icon=""
        :item="item">
        <ListItemContent>
            {{ item.content }}
        </ListItemContent>
    </ListItem>
</template>

<script
    lang="ts"
    setup>
    import type { NoteListItemType } from '../types';
    import ListItem from './ListItem.vue';
    import ListItemContent from './ListItemContent.vue';

    defineProps<{
        readonly item: NoteListItemType;
    }>();
</script>

<style
    lang="scss"
    module>
    .listItemNote {
        background: rgb(from var(--amber) r g b / .05);
        color: color-mix(in oklch, var(--amber) 90%, black 75%);
        font-weight: 400;

        [data-icon] {
            --color: var(--amber);
        }
    }

    :global(.homey-dark-mode) .listItemNote {
        color: color-mix(in oklch, var(--amber) 90%, white 75%);
    }
</style>
