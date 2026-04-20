<template>
    <div :class="$style.listFilter">
        <div :class="$style.listFilterGroup">
            <span :class="$style.listFilterLabel">{{ t('widget.list.filter.type') }}</span>
            <div :class="$style.listFilterChips">
                <button
                    v-for="option of typeOptions"
                    :key="option.value"
                    :class="[$style.listFilterChip, filters.type === option.value && $style.isActive]"
                    :style="filters.type === option.value ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('type', option.value)">
                    {{ option.label }}
                </button>
            </div>
        </div>

        <div :class="$style.listFilterGroup">
            <span :class="$style.listFilterLabel">{{ t('widget.list.filter.date') }}</span>
            <div :class="$style.listFilterChips">
                <button
                    v-for="option of dateOptions"
                    :key="option.value"
                    :class="[$style.listFilterChip, filters.date === option.value && $style.isActive]"
                    :style="filters.date === option.value ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('date', option.value)">
                    {{ option.label }}
                </button>
            </div>
        </div>

        <div
            v-if="persons.length > 0"
            :class="$style.listFilterGroup">
            <span :class="$style.listFilterLabel">{{ t('widget.list.filter.person') }}</span>
            <div :class="$style.listFilterChips">
                <button
                    :class="[$style.listFilterChip, filters.personId === null && $style.isActive]"
                    :style="filters.personId === null ? {'--chip-color': look?.color} : undefined"
                    @click="setFilter('personId', null)">
                    {{ t('widget.list.filter.anyone') }}
                </button>
                <button
                    v-for="person of persons"
                    :key="person.id"
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
    import type { ListDateFilter, ListTypeFilter } from './store';
    import { useTranslate } from '../composables';
    import useStore from './store';

    const t = useTranslate();
    const {
        filters,
        look,
        persons,
        hasActiveFilters,
        resetFilters,
        setFilter
    } = useStore();

    const typeOptions: {value: ListTypeFilter; label: string}[] = [
        {value: 'all', label: t('widget.list.filter.all')},
        {value: 'note', label: t('widget.list.filter.notes')},
        {value: 'product', label: t('widget.list.filter.products')},
        {value: 'task', label: t('widget.list.filter.tasks')}
    ];

    const dateOptions: {value: ListDateFilter; label: string}[] = [
        {value: 'all', label: t('widget.list.filter.all')},
        {value: 'overdue', label: t('widget.list.filter.overdue')},
        {value: 'upcoming', label: t('widget.list.filter.upcoming')},
        {value: 'no_date', label: t('widget.list.filter.no_date')}
    ];
</script>

<style
    lang="scss"
    module>
    .listFilter {
        display: flex;
        padding: 0 var(--homey-su-5) var(--homey-su-3);
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
        color: var(--homey-color-mono-400);
    }

    .listFilterChips {
        display: flex;
        flex-flow: row wrap;
        gap: var(--homey-su-2);
    }

    .listFilterChip {
        --chip-color: var(--homey-color-mono-025);

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

    .listFilterChip.isActive {
        background: var(--chip-color);
        color: white;
    }

    .listFilterClear {
        display: flex;
        align-self: flex-start;
        padding: 0;
        background: transparent;
        border: 0;
        color: var(--homey-color-mono-400);
        font-size: 12px;
        font-weight: 500;
        outline: 0;
        text-decoration: underline;
    }

    :global(.homey-dark-mode) .listFilterChip {
        background: rgb(from var(--homey-color-mono-100) r g b / .5);
    }

    :global(.homey-dark-mode) .listFilterChip.isActive {
        background: var(--chip-color);
    }
</style>
