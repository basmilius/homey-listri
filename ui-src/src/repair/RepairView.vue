<template>
    <Form :class="$style.repairView">
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
            :label="t('device.list.repair.submit')"
            @click="save()"/>
    </Form>
</template>

<script
    lang="ts"
    setup>
    import { onMounted, provide, reactive, ref } from 'vue';
    import { ButtonPrimary, ColorPicker, Form, FormGroup, IconPicker } from '../components';
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
        Homey.setTitle(Homey.__('device.list.repair.title'));
        Homey.setSubtitle(Homey.__('device.list.repair.subtitle'));

        colors.value = await Homey.emit('colors');
        icons.value = await Homey.emit('icons');

        const {name, data} = await Homey.emit('fetch');
        form.name = name;
        form.color = data.color;
        form.icon = data.icon;

        Homey.setTitle(form.name);
    });

    async function save(): Promise<void> {
        Homey.showLoadingOverlay();

        await Homey.emit('save', {
            name: form.name,
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
    .repairView {
        margin-top: 45px;
    }
</style>
