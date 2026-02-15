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
                                type="time"
                                style="max-width: 120px"/>

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
    import { computed, nextTick, onMounted, ref, unref, watch } from 'vue';
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
    const due = defineModel<string | null>('due', {default: null});
    const quantity = defineModel<number>('quantity', {default: 1});

    const dueDate = ref<string>('');
    const dueTime = ref<string>('');
    let isUpdatingDue = false;

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

    async function close(): Promise<void> {
        emit('close');
    }

    async function save(): Promise<void> {
        emit('save');
    }

    function clearDue(): void {
        dueDate.value = '';
        dueTime.value = '';
        due.value = null;
    }

    watch(() => due.value, (newDue) => {
        if (isUpdatingDue) {
            return;
        }

        if (newDue) {
            const dateObj = new Date(newDue);

            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            dueDate.value = `${year}-${month}-${day}`;

            const hours = String(dateObj.getHours()).padStart(2, '0');
            const minutes = String(dateObj.getMinutes()).padStart(2, '0');
            dueTime.value = `${hours}:${minutes}`;
        } else {
            dueDate.value = '';
            dueTime.value = '';
        }
    }, {immediate: true});

    watch([dueDate, dueTime], ([date, time]) => {
        isUpdatingDue = true;

        if (date) {
            const _date = new Date(date);
            const year = _date.getFullYear();
            const month = String(_date.getMonth() + 1).padStart(2, '0');
            const day = String(_date.getDate()).padStart(2, '0');

            const offset = -_date.getTimezoneOffset();
            const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
            const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, '0');
            const offsetSign = offset >= 0 ? '+' : '-';

            if (time) {
                const _time = new Date(time);
                const hours = String(_time.getHours()).padStart(2, '0');
                const minutes = String(_time.getMinutes()).padStart(2, '0');

                due.value = `${year}-${month}-${day}T${hours}:${minutes}:00${offsetSign}${offsetHours}:${offsetMinutes}`;
            } else {
                due.value = `${year}-${month}-${day}T00:00${offsetSign}${offsetHours}:${offsetMinutes}`;
            }
        } else {
            due.value = null;
        }

        nextTick(() => isUpdatingDue = false);
    });
</script>
