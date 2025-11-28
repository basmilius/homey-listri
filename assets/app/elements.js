import { COLORS, ICONS } from './symbols.js';
import { computed, defineComponent, inject, onUnmounted, ref, unref, useId, watch } from './vue.js';

export const ButtonPrimary = defineComponent({
    emits: ['click'],
    props: ['label'],

    template: `
        <button class="homey-button-primary-full" type="button" @click="onClick">
            {{ label }}
        </button>
    `,

    setup(_, {emit}) {
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

    setup(_, {emit}) {
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

    setup(props, {emit}) {
        const id = useId();
        const localValue = ref(props.modelValue);

        watch(localValue, value => emit('update:modelValue', value));
        watch(() => props.modelValue, value => localValue.value = value);

        return {
            id,
            localValue
        };
    }
});

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

export const ScrollContainer = defineComponent({
    props: {
        tag: {
            type: String,
            default: 'div'
        }
    },

    template: `
        <component
            :is="tag"
            ref="containerRef"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchEnd">
            <slot/>
        </component>
    `,

    setup() {
        const containerRef = ref(null);
        const isDragging = ref(false);
        const startY = ref(0);
        const initialScrollTop = ref(0);
        const overscrollOffset = ref(0);

        // Velocity tracking
        const velocitySamples = ref([]);
        const lastY = ref(0);
        const lastTime = ref(0);
        let momentumAnimationId = null;

        // iOS-like rubber band effect during drag
        function rubberBand(offset, dimension) {
            const c = 0.55;
            const absOffset = Math.abs(offset);
            const result = (1 - (1 / ((absOffset * c / dimension) + 1))) * dimension;
            return Math.sign(offset) * result;
        }

        function stopMomentum() {
            if (momentumAnimationId) {
                cancelAnimationFrame(momentumAnimationId);
                momentumAnimationId = null;
            }
        }

        function getSmoothedVelocity() {
            const samples = velocitySamples.value;
            if (samples.length === 0) return 0;

            let totalWeight = 0;
            let weightedSum = 0;

            for (let i = 0; i < samples.length; i++) {
                const weight = i + 1;
                weightedSum += samples[i] * weight;
                totalWeight += weight;
            }

            return weightedSum / totalWeight;
        }

        function startBounceBack() {
            const container = containerRef.value;
            if (!container) return;

            // iOS uses a critically damped spring - no oscillation, just smooth return
            // We'll use CSS transition for the smoothest result
            const currentOffset = overscrollOffset.value;
            const dimension = container.clientHeight;
            const displayOffset = rubberBand(currentOffset, dimension);

            // Duration scales with how far we need to travel (iOS-like)
            const duration = Math.min(400, Math.max(200, Math.abs(displayOffset) * 3));

            container.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
            container.style.transform = 'translateY(0)';
            overscrollOffset.value = 0;
        }

        function startMomentumScroll(velocity) {
            const container = containerRef.value;
            if (!container) return;

            const dimension = container.clientHeight;
            let currentVelocity = velocity;
            let lastTimestamp = performance.now();

            function animate(timestamp) {
                const deltaTime = Math.min((timestamp - lastTimestamp) / 16.67, 2);
                lastTimestamp = timestamp;

                const maxScroll = container.scrollHeight - container.clientHeight;

                // Apply deceleration (iOS uses roughly 0.998 per ms, we use per frame)
                const deceleration = 0.95;
                currentVelocity *= Math.pow(deceleration, deltaTime);

                const newScrollTop = container.scrollTop + currentVelocity * deltaTime;

                if (newScrollTop < 0) {
                    // Hit top boundary
                    container.scrollTop = 0;

                    // Convert remaining velocity into overscroll with heavy dampening
                    const overscrollAmount = Math.min(dimension * 0.3, Math.abs(currentVelocity) * 8);
                    overscrollOffset.value = overscrollAmount;

                    const displayOffset = rubberBand(overscrollAmount, dimension);
                    container.style.transform = `translateY(${displayOffset}px)`;

                    // Immediately start bounce back
                    requestAnimationFrame(() => startBounceBack());
                } else if (newScrollTop > maxScroll) {
                    // Hit bottom boundary
                    container.scrollTop = maxScroll;

                    const overscrollAmount = -Math.min(dimension * 0.3, Math.abs(currentVelocity) * 8);
                    overscrollOffset.value = overscrollAmount;

                    const displayOffset = rubberBand(overscrollAmount, dimension);
                    container.style.transform = `translateY(${displayOffset}px)`;

                    requestAnimationFrame(() => startBounceBack());
                } else {
                    // Normal scrolling
                    container.scrollTop = newScrollTop;

                    // Continue if velocity is significant
                    if (Math.abs(currentVelocity) > 0.1) {
                        momentumAnimationId = requestAnimationFrame(animate);
                    }
                }
            }

            momentumAnimationId = requestAnimationFrame(animate);
        }

        function onTouchStart(evt) {
            stopMomentum();

            const container = containerRef.value;
            if (!container) return;

            const touch = evt.touches[0];
            startY.value = touch.clientY;
            isDragging.value = true;

            lastY.value = touch.clientY;
            lastTime.value = Date.now();
            velocitySamples.value = [];

            initialScrollTop.value = container.scrollTop;

            // Cancel any ongoing CSS transition
            container.style.transition = 'none';

            // If currently in overscroll position, get current transform
            if (overscrollOffset.value === 0) {
                container.style.transform = 'translateY(0)';
            }

            evt.preventDefault();
        }

        function onTouchMove(evt) {
            if (!isDragging.value) return;

            const container = containerRef.value;
            if (!container) return;

            const touch = evt.touches[0];
            const now = Date.now();
            const dt = now - lastTime.value;

            if (dt > 0 && dt < 100) {
                const dy = lastY.value - touch.clientY;
                const velocity = (dy / dt) * 16;

                velocitySamples.value.push(velocity);
                if (velocitySamples.value.length > 5) {
                    velocitySamples.value.shift();
                }
            }

            lastY.value = touch.clientY;
            lastTime.value = now;

            const deltaY = startY.value - touch.clientY;
            const maxScroll = container.scrollHeight - container.clientHeight;
            const targetScroll = initialScrollTop.value + deltaY;
            const dimension = container.clientHeight;

            if (targetScroll < 0) {
                // Overscroll at top
                container.scrollTop = 0;
                const overscroll = -targetScroll;
                overscrollOffset.value = overscroll;
                const displayOffset = rubberBand(overscroll, dimension);
                container.style.transform = `translateY(${displayOffset}px)`;
            } else if (targetScroll > maxScroll) {
                // Overscroll at bottom
                container.scrollTop = maxScroll;
                const overscroll = -(targetScroll - maxScroll);
                overscrollOffset.value = overscroll;
                const displayOffset = rubberBand(overscroll, dimension);
                container.style.transform = `translateY(${displayOffset}px)`;
            } else {
                // Normal scrolling
                container.scrollTop = targetScroll;
                overscrollOffset.value = 0;
                container.style.transform = 'translateY(0)';
            }

            evt.preventDefault();
        }

        function onTouchEnd(evt) {
            if (!isDragging.value) return;

            const container = containerRef.value;
            const velocity = getSmoothedVelocity();
            const wasOverscrolled = overscrollOffset.value !== 0;

            isDragging.value = false;

            if (container && wasOverscrolled) {
                // Smooth bounce back without oscillation
                startBounceBack();
            } else if (container && Math.abs(velocity) > 0.5) {
                // Start momentum scrolling
                startMomentumScroll(velocity);
            }

            evt.preventDefault();
        }

        onUnmounted(() => {
            stopMomentum();
        });

        return {
            containerRef,
            onTouchStart,
            onTouchMove,
            onTouchEnd
        };
    }
});
