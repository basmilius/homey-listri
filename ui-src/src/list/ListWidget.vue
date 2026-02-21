<template>
    <FluxRoot :class="[$style.listWidget, !dynamicHeight && $style.listWidgetFixed]">
        <List
            v-if="ready"
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
    import List from './List.vue';

    const deviceId = ref<string | null>(null);
    const dynamicHeight = ref(true);
    const fixedHeight = ref(400);
    const ready = ref(false);

    window.addEventListener('homeyReady', () => {
        const deviceIds = Homey.getDeviceIds();

        deviceId.value = deviceIds[0] ?? null;
        dynamicHeight.value = Homey.getSetting('dynamicHeight') ?? true;
        fixedHeight.value = Homey.getSetting('fixedHeight') ?? 400;
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
