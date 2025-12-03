<template>
    <Form :class="$style.pairView">
        <FormGroup
            :title="t('device.list.pair.name.title')"
            :description="t('device.list.pair.name.description')">
            <FormInput
                v-model="form.name"
                type="text"/>
        </FormGroup>

        <FormGroup
            :title="t('device.list.pair.color.title')"
            :description="t('device.list.pair.color.description')">
            <ColorPicker v-model="form.color"/>
        </FormGroup>

        <FormGroup
            :title="t('device.list.pair.icon.title')"
            :description="t('device.list.pair.icon.description')">
            <IconPicker v-model="form.icon"/>
        </FormGroup>

        <ButtonPrimary
            :label="t('device.list.pair.submit')"
            @click="create()"/>
    </Form>
</template>

<script
    lang="ts"
    setup>
    import { onMounted, provide, reactive, ref } from 'vue';
    import { ButtonPrimary, ColorPicker, Form, FormGroup, FormInput, IconPicker } from '../components';
    import { useTranslate } from '../composables';
    import { COLORS, ICONS } from '../symbols';

    const t = useTranslate();

    const colors = ref([]);
    const icons = ref([]);
    const form = reactive({
        color: '#0ea5e9',
        icon: '',
        name: ''
    });

    onMounted(async () => {
        Homey.setTitle(Homey.__('device.list.pair.title'));
        Homey.setSubtitle(Homey.__('device.list.pair.subtitle'));

        colors.value = await Homey.emit('colors');
        icons.value = await Homey.emit('icons');
    });

    async function create(): Promise<void> {
        Homey.showLoadingOverlay();

        await Homey.createDevice({
            name: form.name,
            data: {
                id: await Homey.emit('id')
            },
            store: {
                color: form.color,
                icon: form.icon
            }
        });

        Homey.done();
        Homey.hideLoadingOverlay();
    }

    provide(COLORS, colors);
    provide(ICONS, icons);
</script>

<style
    lang="scss"
    module>
    .pairView {
        margin-top: 45px;
    }
</style>
