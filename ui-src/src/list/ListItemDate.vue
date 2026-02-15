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

    const formatterDateOnly = new Intl.DateTimeFormat(navigator.language, {
        month: 'short',
        day: 'numeric'
    });

    const formatterYear = new Intl.DateTimeFormat(navigator.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const formatterYearDateOnly = new Intl.DateTimeFormat(navigator.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
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
        const hasTime = date.getHours() !== 0 || date.getMinutes() !== 0;

        if (now.toDateString() === date.toDateString()) {
            if (hasTime) {
                return `${Homey.__('widget.list.today_at')} ${formatterTime.format(date)}`;
            }
            return Homey.__('widget.list.today');
        }

        if (now.getFullYear() === date.getFullYear()) {
            return hasTime ? formatter.format(date) : formatterDateOnly.format(date);
        }

        return hasTime ? formatterYear.format(date) : formatterYearDateOnly.format(date);
    });
</script>

<style
    lang="scss"
    module>
    .listItemDate {
        font-size: 14px;
    }
</style>
