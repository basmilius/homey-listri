import { COLORS, ICONS } from './symbols.js';
import { computed, defineComponent, inject, ref, unref, useId, watch } from './vue.js';

export const ButtonPrimary = defineComponent({
    emits: ['click'],
    props: ['label'],

    template: `
        <button class="homey-button-primary-full" type="button" @click="onClick">
            {{ label }}
        </button>
    `,

    setup(_, { emit }) {
        const onClick = evt => emit('click', evt);

        return {
            onClick
        };
    }
});

export const ButtonTransparent = defineComponent({
    emits: ['click'],
    props: ['label'],

    template: `
        <button class="homey-button-transparent" type="button" @click="onClick">
            {{ label }}
        </button>
    `,

    setup(_, { emit }) {
        const onClick = evt => emit('click', evt);

        return {
            onClick
        };
    }
});

export const Form = defineComponent({
    template: `
        <form class="homey-form">
            <slot/>
        </form>
    `
});

export const FormGroup = defineComponent({
    props: ['title', 'description'],

    template: `
        <fieldset class="homey-form-fieldset">
            <legend class="homey-form-legend">{{ title }}</legend>
            <div v-if="description" class="homey-form-group" style="margin-top: 6px">{{ description }}</div>
            <div v-if="$slots.before" class="homey-form-group"><slot name="before"/></div>
            <div class="homey-form-group"><slot/></div>
        </fieldset>
    `
});

export const FormInput = defineComponent({
    emits: ['update:modelValue'],
    props: ['disabled', 'label', 'type', 'modelValue'],

    template: `
        <label v-if="label" class="homey-form-label" :for="id">{{ label }}</label>
        <input class="homey-form-input" :disabled="disabled" :id="id" :type="type" v-model="localValue"/>
    `,

    setup(props, { emit }) {
        const id = useId();
        const localValue = ref(props.modelValue);

        watch(localValue, value => emit('update:modelValue', value));
        watch(() => props.modelValue, value => localValue.value = value);

        return {
            id,
            localValue
        };
    }
})

export const ColorPicker = defineComponent({
    emits: ['update:modelValue'],
    props: ['modelValue'],

    template: `
        <div class="color-select">
            <div
                v-for="item of items"
                class="color-select-item"
                :class="{'active': selection === item.hex}"
                :style="{'--color': item.hex}"
                :title="t(item.label)"
                @click="selection = item.hex"/>
        </div>
    `,

    setup(props, {emit}) {
        const items = inject(COLORS);
        const selection = ref(props.modelValue);

        watch(selection, value => emit('update:modelValue', value));
        watch(() => props.modelValue, value => selection.value = value);

        return {
            items,
            selection
        };
    }
});

export const IconPicker = defineComponent({
    components: {
        FormInput
    },

    emits: ['update:modelValue'],
    props: ['modelValue'],

    template: `
        <FormInput :label="t('element.search_icon')" type="text" v-model="search"/>

        <div class="icon-select">
            <div
                v-for="item of items"
                class="icon-select-item listri-icon"
                :class="{'active': selection === item.unicode}"
                :style="{'--icon': JSON.stringify(item.unicode), '--icon-secondary': JSON.stringify(item.unicode + item.unicode)}"
                :title="item.name"
                @click="selection = item.unicode"/>
        </div>
    `,

    setup(props, {emit}) {
        const items = inject(ICONS);
        const search = ref('');
        const selection = ref(props.modelValue);

        const filtered = computed(() => {
            const normalizedQuery = unref(search).toLowerCase().trim();

            return items.value
                .filter(item => (normalizedQuery.length > 0 && item.name.toLowerCase().includes(normalizedQuery)) || (normalizedQuery.length === 0 && item.unicode === selection.value))
                .slice(0, 54);
        });

        watch(selection, value => emit('update:modelValue', value));
        watch(() => props.modelValue, value => selection.value = value);

        return {
            items: filtered,
            search,
            selection
        };
    }
});
