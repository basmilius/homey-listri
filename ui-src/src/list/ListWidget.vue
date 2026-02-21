<template>
    <FluxRoot :class="$style.listWidget">
        <List
            v-if="ready"
            :device-id="deviceId!"/>
    </FluxRoot>
</template>

<script
    lang="ts"
    setup>
    import { FluxRoot } from '@flux-ui/components';
    import { ref } from 'vue';
    import type { FilterDateType } from './store';
    import useStore from './store';
    import List from './List.vue';

    const deviceId = ref<string | null>(null);
    const ready = ref(false);

    const { setFilters } = useStore();

    function applySettings(): void {
        const settings = Homey.getSettings();
        const person = (settings.filterPerson as string) ?? '';
        const date = ((settings.filterDate as string) ?? 'all') as FilterDateType;
        setFilters(person, date);
    }

    window.addEventListener('homeyReady', () => {
        const deviceIds = Homey.getDeviceIds();

        deviceId.value = deviceIds[0] ?? null;
        ready.value = true;

        applySettings();

        Homey.on('settings', applySettings);

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
</style>
