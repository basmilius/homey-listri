<template>
    <ListForm
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:person="form.person"
        v-model:due-date="form.dueDate"
        v-model:due-time="form.dueTime"
        v-model:quantity="form.quantity"
        :device-id="deviceId"
        :save-label="t('widget.list.add.add')"
        :title="title"
        :type="type"
        @close="close()"
        @save="save()"/>
</template>

<script
    lang="ts"
    setup>
    import { computed, reactive } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListItemTypeField } from '../types';
    import ListForm from './ListForm.vue';

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

    const form = reactive({
        category: '',
        content: '',
        person: null,
        dueDate: null,
        dueTime: null,
        quantity: 1
    });

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

    async function close(): Promise<void> {
        emit('close');
    }

    async function save(): Promise<void> {
        await Homey.api('POST', `/${deviceId}/items`, {
            type: type,
            category: form.category,
            content: form.content,
            personId: form.person,
            dueDate: form.dueDate,
            dueTime: form.dueTime,
            quantity: form.quantity
        });

        await close();
    }
</script>
