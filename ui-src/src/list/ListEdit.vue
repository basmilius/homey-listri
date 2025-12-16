<template>
    <ListForm
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:person="form.person"
        v-model:due="form.due"
        v-model:quantity="form.quantity"
        :device-id="deviceId"
        :save-label="t('widget.list.add.save')"
        :title="title"
        :type="item.type"
        @close="close()"
        @save="save()"/>
</template>

<script
    lang="ts"
    setup>
    import { computed, reactive, watch } from 'vue';
    import { useTranslate } from '../composables';
    import type { ListItemType } from '../types';
    import ListForm from './ListForm.vue';

    const emit = defineEmits<{
        close: [];
    }>();

    const {
        deviceId,
        item
    } = defineProps<{
        readonly deviceId: string;
        readonly item: ListItemType;
    }>();

    const t = useTranslate();

    const form = reactive({
        category: '',
        content: '',
        person: null,
        due: null,
        quantity: 1
    });

    const title = computed(() => {
        switch (item.type) {
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
        await Homey.api('POST', `/${deviceId}/items/${item.id}`, {
            category: form.category,
            content: form.content,
            personId: form.person,
            due: form.due,
            quantity: form.quantity
        });

        await close();
    }

    watch(() => item, item => {
        // todo: improve typing here...
        form.category = (item as any).category;
        form.content = (item as any).content;
        form.person = (item as any).person?.id;
        form.due = (item as any).due?.toISO();
        form.quantity = (item as any).quantity;
    }, {immediate: true});
</script>
