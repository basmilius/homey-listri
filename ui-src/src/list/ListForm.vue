<template>
    <FluxPane style="max-height: calc(100dvh - 30px); width: calc(100dvw - 30px); overflow-x: hidden">
        <FluxPaneHeader :title="title"/>

        <FluxPaneBody>
            <FluxForm>
                <FluxFormColumn>
                    <template v-if="type === 'product'">
                        <FluxFormField :label="t('widget.list.add.product')">
                            <FluxFormInput v-model="content"/>
                        </FluxFormField>

                        <FluxFormField
                            is-optional
                            :label="t('widget.list.add.category')">
                            <FluxFormSelect
                                v-model="category"
                                :options="categoryOptions"/>
                        </FluxFormField>

                        <FluxFormField :label="t('widget.list.add.quantity')">
                            <FluxQuantitySelector
                                v-model="quantity"
                                :min="1"
                                :step="1"
                                style="align-self: start"/>
                        </FluxFormField>
                    </template>

                    <FluxFormField
                        v-else
                        :label="t('widget.list.add.content')">
                        <FluxFormTextArea
                            v-model="content"
                            :rows="2"/>
                    </FluxFormField>

                    <FluxFormField
                        v-if="type === 'task'"
                        is-optional
                        :label="t('widget.list.add.person')">
                        <FluxFormSelect
                            v-model="person"
                            :options="personOptions"/>
                    </FluxFormField>

                    <FluxFormField
                        v-if="type === 'task'"
                        is-optional
                        :label="t('widget.list.add.due')">
                        <FluxFormInputGroup>
                            <FluxFormInput
                                v-model="dueDate"
                                type="date"/>

                            <FluxSeparator direction="vertical"/>

                            <FluxFormInput
                                v-model="dueTime"
                                type="time"/>

                            <FluxSecondaryButton
                                icon-leading="trash"
                                @click="clearDue()"/>
                        </FluxFormInputGroup>
                    </FluxFormField>

                    <FluxButtonStack style="width: 100%">
                        <FluxSecondaryButton
                            :label="t('widget.list.add.cancel')"
                            style="flex-grow: 1"
                            @click="close()"/>

                        <FluxPrimaryButton
                            :disabled="!canAdd"
                            :label="saveLabel"
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
    import { FluxButtonStack, FluxForm, FluxFormColumn, FluxFormField, FluxFormInput, FluxFormInputGroup, FluxFormSelect, FluxFormTextArea, FluxPane, FluxPaneBody, FluxPaneHeader, FluxPrimaryButton, FluxQuantitySelector, FluxSecondaryButton, FluxSeparator } from '@flux-ui/components';
    import type { FluxFormSelectOption } from '@flux-ui/types';
    import { computed, onMounted, unref } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListItemTypeField } from '../types';
    import useStore from './store';

    const emit = defineEmits<{
        close: [];
        save: [];
    }>();

    const category = defineModel<string>('category', {default: ''});
    const content = defineModel<string>('content', {default: ''});
    const person = defineModel<string | null>('person', {default: null});
    const dueDate = defineModel<string | null>('dueDate', {default: null});
    const dueTime = defineModel<string | null>('dueTime', {default: null});
    const quantity = defineModel<number>('quantity', {default: 1});

    const {
        deviceId
    } = defineProps<{
        readonly deviceId: string;
        readonly saveLabel: string;
        readonly title: string;
        readonly type: ListItemTypeField;
    }>();

    const t = useTranslate();
    const {
        categories,
        persons,

        loadCategories,
        loadPersons
    } = useStore();

    const canAdd = computed(() => unref(content).trim().length > 2);

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

    onMounted(async () => {
        await Promise.allSettled([
            loadCategories(deviceId),
            loadPersons(deviceId)
        ]);
    });

    function clearDue(): void {
        dueDate.value = null;
        dueTime.value = null;
    }

    async function close(): Promise<void> {
        emit('close');
    }

    async function save(): Promise<void> {
        emit('save');
    }
</script>
