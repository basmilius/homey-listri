<template>
    <ListItem
        completable
        tappable
        :icon="item.checked ? '' : ''"
        :item="item">
        <ListItemContent>
            {{ item.content }}
        </ListItemContent>

        <ListItemFooter v-if="item.dueDate || item.person">
            <ListItemPerson
                v-if="item.person"
                :image="item.person.image"
                :name="item.person.name"/>

            <ListItemDate
                v-if="item.dueDate"
                :date="item.dueDate"
                :time="item.dueTime"/>
        </ListItemFooter>
    </ListItem>
</template>

<script
    lang="ts"
    setup>
    import type { TaskListItemType } from '../types';
    import ListItem from './ListItem.vue';
    import ListItemContent from './ListItemContent.vue';
    import ListItemFooter from './ListItemFooter.vue';
    import ListItemPerson from './ListItemPerson.vue';
    import ListItemDate from './ListItemDate.vue';

    defineProps<{
        readonly item: TaskListItemType;
    }>();
</script>
