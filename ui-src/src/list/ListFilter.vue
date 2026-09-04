<template>
    <div :class="$style.listFilter">
        <div :class="$style.listFilterGroup">
            <span
                id="list-filter-type"
                :class="$style.listFilterLabel">{{ t('widget.list.filter.type') }}</span>
            <div
                aria-labelledby="list-filter-type"
                :class="$style.listFilterChips"
                role="group">
                <button
                    v-for="option of typeOptions"
                    :key="option.value"
                    :aria-pressed="filters.type === option.value"
                    :class="[$style.listFilterChip, filters.type === option.value && $style.isActive]"
                    :style="filters.type === option.value ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('type', option.value)">
                    {{ option.label }}
                </button>
            </div>
        </div>

        <div
            v-if="canFilterByTaskFields"
            :class="$style.listFilterGroup">
            <span
                id="list-filter-date"
                :class="$style.listFilterLabel">{{ t('widget.list.filter.date') }}</span>
            <div
                aria-labelledby="list-filter-date"
                :class="$style.listFilterChips"
                role="group">
                <button
                    v-for="option of dateOptions"
                    :key="option.value"
                    :aria-pressed="filters.date === option.value"
                    :class="[$style.listFilterChip, filters.date === option.value && $style.isActive]"
                    :style="filters.date === option.value ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('date', option.value)">
                    {{ option.label }}
                </button>
            </div>
        </div>

        <div
            v-if="canFilterByTaskFields && persons.length > 0"
            :class="$style.listFilterGroup">
            <span
                id="list-filter-person"
                :class="$style.listFilterLabel">{{ t('widget.list.filter.person') }}</span>
            <div
                aria-labelledby="list-filter-person"
                :class="$style.listFilterChips"
                role="group">
                <button
                    :aria-pressed="filters.personId === null"
                    :class="[$style.listFilterChip, filters.personId === null && $style.isActive]"
                    :style="filters.personId === null ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('personId', null)">
                    {{ t('widget.list.filter.anyone') }}
                </button>
                <button
                    v-for="person of persons"
                    :key="person.id"
                    :aria-pressed="filters.personId === person.id"
                    :class="[$style.listFilterChip, filters.personId === person.id && $style.isActive]"
                    :style="filters.personId === person.id ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('personId', person.id)">
                    {{ person.name }}
                </button>
            </div>
        </div>

        <button
            v-if="hasActiveFilters"
            :class="$style.listFilterClear"
            @click="resetFilters()">
            {{ t('widget.list.filter.clear') }}
        </button>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { computed, unref } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListDateFilter, ListTypeFilter } from './store';
    import useStore from './store';

    const TYPE_FILTER_LABELS: Record<ListTypeFilter, string> = {
        all: 'widget.list.filter.all_types',
        note: 'widget.list.filter.notes',
        product: 'widget.list.filter.products',
        task: 'widget.list.filter.tasks'
    };

    const {
        availableTypeFilters,
        canFilterByTaskFields,
        filters,
        look,
        persons,
        hasActiveFilters,
        resetFilters,
        setFilter
    } = useStore();

    const t = useTranslate();

    const dateOptions: {value: ListDateFilter; label: string}[] = [
        {value: 'all', label: t('widget.list.filter.all_dates')},
        {value: 'due_by_today', label: t('widget.list.filter.due_by_today')},
        {value: 'upcoming', label: t('widget.list.filter.upcoming')},
        {value: 'no_date', label: t('widget.list.filter.no_date')}
    ];

    const typeOptions = computed<{value: ListTypeFilter; label: string}[]>(() => unref(availableTypeFilters).map(value => ({
        value,
        label: t(TYPE_FILTER_LABELS[value])
    })));
</script>

<style
    lang="scss"
    module>
    .listFilter {
        display: flex;
        padding: 0 var(--homey-su-4) var(--homey-su-3);
        flex-flow: column;
        gap: var(--homey-su-3);
    }

    .listFilterGroup {
        display: flex;
        flex-flow: column;
        gap: var(--homey-su-2);
    }

    .listFilterLabel {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: .02em;
        text-transform: uppercase;
        color: var(--homey-color-mono-600);
    }

    .listFilterChips {
        display: flex;
        flex-flow: row wrap;
        gap: var(--homey-su-2);
    }

    .listFilterChip {
        --chip-color: var(--homey-color-mono-600);

        display: flex;
        padding: var(--homey-su-2) var(--homey-su-3);
        align-items: center;
        background: var(--homey-color-mono-025);
        border: 0;
        border-radius: 99px;
        color: var(--homey-color-mono-600);
        font-size: 13px;
        font-weight: 500;
        outline: 0;
        transition: 150ms var(--swift-out);
        white-space: nowrap;
    }

    .listFilterChip:active {
        opacity: .7;
    }

    .listFilterClear {
        display: flex;
        align-self: flex-start;
        padding: 0;
        background: transparent;
        border: 0;
        color: var(--homey-color-mono-600);
        font-size: 12px;
        font-weight: 500;
        outline: 0;
        text-decoration: underline;
    }

    :global(.homey-dark-mode) .listFilterChip {
        background: rgb(from var(--homey-color-mono-100) r g b / .5);
    }

    // The list color is picked freely, so its lightness is capped to keep the white label readable.
    .listFilterChip.isActive {
        background: oklch(from var(--chip-color) min(l, .52) c h);
        color: white;
    }
</style>
