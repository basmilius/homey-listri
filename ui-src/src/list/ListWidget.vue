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
    import List from './List.vue';

    const deviceId = ref<string | null>(null);
    const ready = ref(false);

    window.addEventListener('homeyReady', () => {
        const deviceIds = Homey.getDeviceIds();

        deviceId.value = deviceIds[0] ?? null;
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
</style>
