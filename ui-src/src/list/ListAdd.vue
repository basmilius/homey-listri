<template>
    <FluxPane style="max-height: calc(100dvh - 30px); width: calc(100dvw - 30px); overflow-x: hidden">
        <FluxPaneHeader :title="title"/>

        <FluxPaneBody>
            <FluxForm>
                <FluxFormColumn>
                    <template v-if="type === 'product'">
                        <FluxFormField :label="t('widget.list.add.product')">
                            <FluxFormInput v-model="form.content"/>
                        </FluxFormField>

                        <FluxFormField
                            is-optional
                            :label="t('widget.list.add.category')">
                            <FluxFormSelect
                                v-model="form.category"
                                :options="categoryOptions"/>
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
                        v-if="type === 'task'"
                        is-optional
                        :label="t('widget.list.add.person')">
                        <FluxFormSelect
                            v-model="form.person"
                            :options="personOptions"/>
                    </FluxFormField>

                    <FluxFormField
                        v-if="type === 'task'"
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
                            :disabled="!canAdd"
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
    import { computed, onMounted, reactive, unref } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListItemTypeField } from '../types';
    import useStore from './store';

    const emit = defineEmits<{
        close: [];
    }>();

    const {
        deviceId,
        type
    } = defineProps<{
        readonly deviceId: string;
        readonly type: ListItemTypeField;
    }>();

    const t = useTranslate();
    const {
        categories,
        persons,

        loadCategories,
        loadItems,
        loadPersons
    } = useStore();

    const form = reactive({
        category: '',
        content: '',
        person: null,
        due: null,
        quantity: 1
    });

    const canAdd = computed(() => form.content.trim().length > 2);

    const categoryOptions = computed<FluxFormSelectOption[]>(() => unref(categories).map<FluxFormSelectOption>(c => ({
        label: t(`grocery.category.${c.category}`),
        icon: c.icon as any,
        value: c.category
    })));

    const personOptions = computed<FluxFormSelectOption[]>(() => [
        {value: null, label: t('widget.list.add.anyone')},
        ...unref(persons).map<FluxFormSelectOption>(p => ({
            label: p.name,
            imageSrc: p.image,
            value: p.id
        }))
    ]);

    const title = computed(() => {
        switch (type) {
            case 'note':
                return t('widget.list.add.title.note');

            case 'product':
                return t('widget.list.add.title.product');

            case 'task':
                return t('widget.list.add.title.task');
        }
    });

    onMounted(async () => {
        await Promise.allSettled([
            loadCategories(deviceId),
            loadPersons(deviceId)
        ]);
    });

    async function close(): Promise<void> {
        emit('close');
    }

    async function save(): Promise<void> {
        await Homey.api('POST', `/${deviceId}/items`, {
            type: type,
            category: form.category,
            content: form.content,
            personId: form.person,
            due: form.due,
            quantity: form.quantity
        });

        await close();
    }
</script>
