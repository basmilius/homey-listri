<template>
    <div :class="$style.listItemDate">
        {{ value }}
    </div>
</template>

<script
    lang="ts"
    setup>
    import { computed } from 'vue';

    const {
        due
    } = defineProps<{
        readonly due: string;
    }>();

    const formatter = new Intl.DateTimeFormat(navigator.language, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const formatterYear = new Intl.DateTimeFormat(navigator.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const formatterTime = new Intl.DateTimeFormat(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    });

    const value = computed(() => {
        if (!due) {
            return null;
        }

        const date = new Date(due);
        const now = new Date();

        if (now.toDateString() === date.toDateString()) {
            return `${Homey.__('widget.list.today_at')} ${formatterTime.format(date)}`;
        }

        if (now.getFullYear() === date.getFullYear()) {
            return formatter.format(date);
        }

        return formatterYear.format(date);
    });
</script>

<style
    lang="scss"
    module>
    .listItemDate {
        font-size: 14px;
    }
</style>
