<template>
    <div
        :class="[
            $style.listItemMount,
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
    import { computed, ref, type VNode } from 'vue';
    import { Icon } from '../components';

    const emit = defineEmits<{
        readonly remove: [];
        readonly tap: [];
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

    const x = computed(() => {
        if (!isDragging.value) {
            return isOpen.value ? -90 : 0;
        }

        const delta = startX.value - currentX.value;

        return -Math.max(0, Math.min(90, delta));
    });

    function onDeleteClick(): void {
        isOpen.value = false;
        emit('remove');
    }

    function onTouchStart(evt: TouchEvent): void {
        if (isOpen.value) {
            return;
        }

        const touch = evt.touches[0]!;
        startX.value = touch.clientX;
        startY.value = touch.clientY;
        currentX.value = touch.clientX;
        currentY.value = touch.clientY;
        isDragging.value = true;
        isTap.value = true;

        touchedInteractive.value = (evt.target as HTMLElement).closest('[data-interactive]') !== null;
    }

    function onTouchMove(evt: TouchEvent): void {
        if (!isDragging.value) {
            return;
        }

        const touch = evt.touches[0]!;
        currentX.value = touch.clientX;
        currentY.value = touch.clientY;

        const deltaX = Math.abs(currentX.value - startX.value);
        const deltaY = Math.abs(currentY.value - startY.value);

        if (deltaX > 10 || deltaY > 10) {
            isTap.value = false;
        }
    }

    function onTouchEnd(evt: TouchEvent): void {
        if (isOpen.value) {
            setTimeout(() => isOpen.value = false, 50);
            evt.stopPropagation();
            return;
        }

        if (!isDragging.value) {
            return;
        }

        isDragging.value = false;

        const deltaX = startX.value - currentX.value;

        if (isTap.value && !touchedInteractive.value) {
            emit('tap');
            return;
        }

        isOpen.value = deltaX > 45;
    }
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

    .listItemMount.isOpen .listItemMountBody > * {
        pointer-events: none;
    }

    .listItemMountRemoveIcon {
        --color: white;
        --size: 20px;
    }
</style>
