<template>
    <div
        :class="[
            $style.listItemMount,
            isDestructive && $style.isDestructive,
            isDragging && $style.isDragging,
            isOpen && $style.isOpen
        ]"
        :style="{
            '--x': x + 'px'
        }">

        <div
            :class="$style.listItemMountBody"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchEnd">
            <slot/>
        </div>

        <div
            :class="$style.listItemMountRemove"
            data-delete-button
            @click="onDeleteClick()"
            @touchend.stop.prevent="onDeleteClick()">
            <Icon
                :class="$style.listItemMountRemoveIcon"
                icon=""/>
        </div>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { computed, ref, unref, type VNode, watch } from 'vue';
    import { Icon } from '../components';

    const emit = defineEmits<{
        readonly longPress: [];
        readonly remove: [];
        readonly tap: [];
    }>();

    const {
        longPressDuration = 300
    } = defineProps<{
        readonly longPressDuration?: number;
    }>();

    defineSlots<{
        readonly default: VNode[];
    }>();

    const isDragging = ref(false);
    const isOpen = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    const currentX = ref(0);
    const currentY = ref(0);
    const isTap = ref(true);
    const touchedInteractive = ref(false);
    const longPressTimer = ref<ReturnType<typeof setTimeout> | null>(null);
    const didLongPress = ref(false);

    const isDestructive = computed(() => {
        if (!isDragging.value) {
            return false;
        }

        const delta = startX.value - currentX.value;
        return delta > 180;
    });

    const x = computed(() => {
        if (!isDragging.value) {
            return isOpen.value ? -90 : 0;
        }

        const delta = startX.value - currentX.value;
        const threshold = 90;
        const rubberBandFactor = 0.3;

        if (delta <= 0) {
            return 0;
        }

        if (delta <= threshold) {
            return -delta;
        }

        const overscroll = delta - threshold;
        const rubberBanded = threshold + overscroll * rubberBandFactor;

        return -rubberBanded;
    });

    function clearLongPressTimer(): void {
        if (unref(longPressTimer)) {
            clearTimeout(unref(longPressTimer)!);

            longPressTimer.value = null;
        }
    }

    function onDeleteClick(): void {
        isOpen.value = false;
        emit('remove');
    }

    function onTouchStart(evt: TouchEvent): void {
        if (unref(isOpen)) {
            return;
        }

        const touch = evt.touches[0]!;
        startX.value = touch.clientX;
        startY.value = touch.clientY;
        currentX.value = touch.clientX;
        currentY.value = touch.clientY;
        isDragging.value = true;
        isTap.value = true;
        didLongPress.value = false;

        touchedInteractive.value = (evt.target as HTMLElement).closest('[data-interactive]') !== null;

        clearLongPressTimer();

        longPressTimer.value = setTimeout(() => {
            if (!(unref(isTap) && !unref(touchedInteractive))) {
                return;
            }

            didLongPress.value = true;

            emit('longPress');
        }, longPressDuration);
    }

    function onTouchMove(evt: TouchEvent): void {
        if (!unref(isDragging)) {
            return;
        }

        const touch = evt.touches[0]!;
        currentX.value = touch.clientX;
        currentY.value = touch.clientY;

        const deltaX = Math.abs(currentX.value - startX.value);
        const deltaY = Math.abs(currentY.value - startY.value);

        if (deltaX > 10 || deltaY > 10) {
            isTap.value = false;
            clearLongPressTimer();
        }

        if (deltaX > deltaY && deltaX > 5) {
            evt.preventDefault();
        }
    }

    function onTouchEnd(evt: TouchEvent): void {
        clearLongPressTimer();

        if (unref(isOpen)) {
            // Check if the touch target is the delete button or its child
            const target = evt.target as HTMLElement;
            const isDeleteButton = target.closest('[data-delete-button]') !== null;
            
            // Don't close if user is tapping the delete button
            if (!isDeleteButton) {
                setTimeout(() => isOpen.value = false, 50);
                evt.stopPropagation();
            }
            return;
        }

        if (!unref(isDragging)) {
            return;
        }

        isDragging.value = false;

        const deltaX = startX.value - currentX.value;

        if (unref(isTap) && !unref(touchedInteractive) && !unref(didLongPress)) {
            emit('tap');
            return;
        }

        if (deltaX > 180) {
            emit('remove');
            return;
        }

        isOpen.value = deltaX > 45;
    }

    watch(isOpen, (open, _, onCleanup) => {
        if (!open) {
            return;
        }

        const timeout = setTimeout(() => {
            isOpen.value = false;
        }, 3000);

        onCleanup(() => clearTimeout(timeout));
    });
</script>

<style
    lang="scss"
    module>
    .listItemMount {
        --x: 0;

        position: relative;
    }

    .listItemMountBody {
        position: relative;
        translate: var(--x) 0;
    }

    .listItemMountRemove {
        position: absolute;
        display: flex;
        top: 0;
        right: 0;
        bottom: 0;
        width: max(0px, -1 * var(--x) - var(--homey-su-1));
        align-items: center;
        justify-content: center;
        background: var(--rose);
        border-radius: var(--homey-border-radius-small);
        overflow: hidden;
        transition: background 150ms var(--swift-out);
    }

    .listItemMountRemove:active {
        background: color-mix(in oklch, var(--rose) 90%, black 10%);
    }

    .listItemMount:not(.isDragging) .listItemMountBody {
        transition: opacity 420ms var(--swift-out), translate 420ms var(--deceleration-curve);
    }

    .listItemMount:not(.isDragging) .listItemMountRemove {
        transition: width 420ms var(--deceleration-curve);
    }

    .listItemMount.isOpen .listItemMountBody {
        opacity: .25;
    }

    .listItemMount.isDestructive .listItemMountBody {
        filter: sepia(1) hue-rotate(-50deg) saturate(3);
    }

    .listItemMount.isOpen .listItemMountBody > * {
        pointer-events: none;
    }

    .listItemMountRemoveIcon {
        --color: white;
        --size: 20px;
    }
</style>
