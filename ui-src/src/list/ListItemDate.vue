<template>
    <div :class="$style.listItemDate">
        {{ value }}
    </div>
</template>

<script
    lang="ts"
    setup>
    import { DateTime } from 'luxon';
    import { computed } from 'vue';

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

    const value = computed(() => {
        const now = DateTime.now();

        if (time) {
            const _date = DateTime.fromFormat(`${date} ${time}`, 'yyyy-MM-dd HH:mm:ss');
            const _time = _date.toFormat('HH:mm');

            if (now.toISODate() === _date.toISODate()) {
                return `${Homey.__('widget.list.today_at')} ${_time}`;
            }

            if (now.year === _date.year) {
                return `${formatter.format(_date.toJSDate())} ${_time}`;
            }

            return `${formatterYear.format(_date.toJSDate())} ${_time}`;
        } else {
            const _date = DateTime.fromFormat(date, 'yyyy-MM-dd');

            if (now.toISODate() === _date.toISODate()) {
                return Homey.__('widget.list.today');
            }

            if (now.year === _date.year) {
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
