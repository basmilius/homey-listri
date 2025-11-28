import { ButtonPrimary, ColorPicker, Form, FormGroup, FormInput, IconPicker } from '../../../assets/app/elements.js';
import { COLORS, ICONS } from '../../../assets/app/symbols.js';
import { createApp, onMounted, provide, reactive, ref } from '../../../assets/app/vue.js';

const app = createApp({
    components: {
        ButtonPrimary,
        ColorPicker,
        Form,
        FormGroup,
        FormInput,
        IconPicker
    },

    template: `
        <Form>
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
    `,

    setup() {
        const colors = ref([]);
        const icons = ref([]);
        const form = reactive({
            color: '#0ea5e9',
            icon: '',
            name: ''
        });

        Homey.setTitle(Homey.__('device.list.pair.title'));
        Homey.setSubtitle(Homey.__('device.list.pair.subtitle'));

        onMounted(async () => {
            colors.value = await Homey.emit('colors');
            icons.value = await Homey.emit('icons');
        });

        const create = async () => {
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
        };

        provide(COLORS, colors);
        provide(ICONS, icons);

        return {
            create,
            form
        };
    }
});

app.config.globalProperties.t = key => Homey.__(key) ?? key;

app.mount('#app');
