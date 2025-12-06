<template>
    <FluxPane style="max-height: calc(100dvh - 30px); width: calc(100dvw - 30px); overflow-x: hidden">
        <FluxPaneHeader :title="t('widget.list.add.title')"/>

        <FluxPaneBody>
            <FluxForm>
                <FluxFormColumn>
                    <FluxFormField
                        v-if="typeOptions.length > 1"
                        :label="t('widget.list.add.type')">
                        <FluxFormSelect
                            v-model="form.type"
                            :options="typeOptions"/>
                    </FluxFormField>

                    <template v-if="form.type === 'product'">
                        <FluxFormField :label="t('widget.list.add.product')">
                            <FluxFormInput v-model="form.content"/>
                        </FluxFormField>

                        <FluxFormField :label="t('widget.list.add.quantity')">
                            <FluxQuantitySelector
                                v-model="form.quantity"
                                :min="1"
                                :step="1"
                                style="align-self: start"/>
                        </FluxFormField>
                    </template>

                    <FluxFormField
                        v-else
                        :label="t('widget.list.add.content')">
                        <FluxFormTextArea
                            v-model="form.content"
                            :rows="2"/>
                    </FluxFormField>

                    <FluxFormField
                        v-if="form.type === 'task'"
                        is-optional
                        :label="t('widget.list.add.person')">
                        <FluxFormSelect
                            v-model="form.person"
                            :options="personOptions"/>
                    </FluxFormField>

                    <FluxFormField
                        v-if="form.type === 'task'"
                        is-optional
                        :label="t('widget.list.add.due')">
                        <FluxFormInputGroup>
                            <FluxFormInput
                                v-model="form.due"
                                type="datetime-local"/>

                            <FluxSecondaryButton
                                icon-leading="trash"
                                @click="form.due = null"/>
                        </FluxFormInputGroup>
                    </FluxFormField>

                    <FluxButtonStack style="width: 100%">
                        <FluxSecondaryButton
                            :label="t('widget.list.add.cancel')"
                            style="flex-grow: 1"
                            @click="close()"/>

                        <FluxPrimaryButton
                            :label="t('widget.list.add.submit')"
                            style="flex-grow: 1"
                            @click="save()"/>
                    </FluxButtonStack>
                </FluxFormColumn>
            </FluxForm>
        </FluxPaneBody>
    </FluxPane>
</template>

<script
    lang="ts"
    setup>
    import { FluxButtonStack, FluxForm, FluxFormColumn, FluxFormField, FluxFormInput, FluxFormInputGroup, FluxFormSelect, FluxFormTextArea, FluxPane, FluxPaneBody, FluxPaneHeader, FluxPrimaryButton, FluxQuantitySelector, FluxSecondaryButton } from '@flux-ui/components';
    import type { FluxFormSelectOption } from '@flux-ui/types';
    import { computed, onMounted, reactive, unref, watch } from 'vue';
    import { useTranslate } from '../composables';
    import useStore from './store';

    const emit = defineEmits<{
        close: [];
    }>();

    const {
        deviceId
    } = defineProps<{
        readonly deviceId: string;
    }>();

    const t = useTranslate();
    const {
        look,
        persons,

        loadItems,
        loadPersons
    } = useStore();

    const form = reactive({
        type: 'note',
        content: '',
        person: null,
        due: null,
        quantity: 1
    });

    const personOptions = computed<FluxFormSelectOption[]>(() => [
        {value: null, label: t('widget.list.add.anyone')},
        ...unref(persons).map<FluxFormSelectOption>(p => ({
            label: p.name,
            imageSrc: p.image,
            value: p.id
        }))
    ]);

    const typeOptions = computed<FluxFormSelectOption[]>(() => {
        const types: FluxFormSelectOption[] = [];

        switch (unref(look)?.type) {
            case 'list':
                types.push({value: 'task', label: t('widget.list.add.task')});
                types.push({value: 'note', label: t('widget.list.add.note')});
                break;

            case 'grocery_list':
                types.push({value: 'product', label: t('widget.list.add.product')});
                break;
        }

        return types;
    });

    onMounted(async () => {
        await loadPersons(deviceId);
    });

    async function close(): Promise<void> {
        emit('close');
    }

    async function save(): Promise<void> {
        await Homey.api('POST', `/${deviceId}/items`, {
            type: form.type,
            content: form.content,
            personId: form.person,
            due: form.due,
            quantity: form.quantity
        });

        await loadItems(deviceId);
        await close();
    }

    watch([look, typeOptions], ([_, options]) => {
        form.type = (options[0]?.value as string) ?? '-';
    }, {immediate: true});
</script>

<style
    lang="scss"
    module>

</style>
