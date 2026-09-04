<template>
    <FluxRoot :class="[$style.listWidget, !dynamicHeight && $style.listWidgetFixed]">
        <List
            v-if="ready"
            :default-date-filter="defaultDateFilter"
            :default-type-filter="defaultTypeFilter"
            :device-id="deviceId!"
            :dynamic-height="dynamicHeight"
            :fixed-height="fixedHeight"/>
    </FluxRoot>
</template>

<script
    lang="ts"
    setup>
    import { FluxRoot } from '@flux-ui/components';
    import { ref } from 'vue';
    import { type ListDateFilter, type ListTypeFilter, toDateFilter, toTypeFilter } from './store';
    import List from './List.vue';

    const defaultDateFilter = ref<ListDateFilter>('all');
    const defaultTypeFilter = ref<ListTypeFilter>('all');
    const deviceId = ref<string | null>(null);
    const dynamicHeight = ref(true);
    const fixedHeight = ref(400);
    const ready = ref(false);

    window.addEventListener('homeyReady', () => {
        const deviceIds = Homey.getDeviceIds();
        const settings = Homey.getSettings();

        defaultDateFilter.value = toDateFilter(settings.defaultDateFilter);
        defaultTypeFilter.value = toTypeFilter(settings.defaultTypeFilter);
        deviceId.value = deviceIds[0] ?? null;
        dynamicHeight.value = settings.dynamicHeight as boolean ?? true;
        fixedHeight.value = settings.fixedHeight as number ?? 400;
        ready.value = true;

        Homey.ready();
    });
</script>

<style
    lang="scss"
    module>
    .listWidget {
        position: relative;
        display: flex;
        max-height: 720px;
        flex-flow: column;
    }

    .listWidgetFixed {
        overflow-y: auto;
    }
</style>
