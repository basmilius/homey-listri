<template>
    <div :class="$style.listItemDate">
        {{ value }}
    </div>
</template>

<script
    lang="ts"
    setup>
    import { computed, unref } from 'vue';
    import { useToday } from '../composables';
    import { dueDateTime } from '../util';

    const {
        date,
        time
    } = defineProps<{
        readonly date: string;
        readonly time?: string;
    }>();

    const formatter = new Intl.DateTimeFormat(navigator.language, {
        month: 'short',
        day: 'numeric'
    });

    const formatterYear = new Intl.DateTimeFormat(navigator.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const today = useToday();

    const value = computed(() => {
        const _today = unref(today);
        const _date = dueDateTime(date, time);

        if (!_date.isValid) {
            return date;
        }

        if (time) {
            const _time = _date.toFormat('HH:mm');

            if (_today.toISODate() === _date.toISODate()) {
                return `${Homey.__('widget.list.today_at')} ${_time}`;
            }

            if (_today.year === _date.year) {
                return `${formatter.format(_date.toJSDate())} ${_time}`;
            }

            return `${formatterYear.format(_date.toJSDate())} ${_time}`;
        } else {
            if (_today.toISODate() === _date.toISODate()) {
                return Homey.__('widget.list.today');
            }

            if (_today.year === _date.year) {
                return formatter.format(_date.toJSDate());
            }

            return formatterYear.format(_date.toJSDate());
        }
    });
</script>

<style
    lang="scss"
    module>
    .listItemDate {
        font-size: 14px;
    }
</style>
