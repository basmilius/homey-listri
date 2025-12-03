<template>
    <component
        :is="tag"
        ref="containerRef"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd">
        <slot/>
    </component>
</template>

<script
    lang="ts"
    setup>
    import { type Component, onUnmounted, ref, unref } from 'vue';

    const {
        tag = 'div'
    } = defineProps<{
        readonly tag: Component | string;
    }>();

    const containerRef = ref<HTMLDivElement | null>(null);
    const isDragging = ref(false);
    const startY = ref(0);
    const initialScrollTop = ref(0);
    const overscrollOffset = ref(0);

    const velocitySamples = ref<number[]>([]);
    const lastY = ref(0);
    const lastTime = ref(0);
    let momentumAnimationId: number | null = null;

    onUnmounted(() => {
        stopMomentum();
    });

    function rubberBand(offset: number, dimension: number): number {
        const c = 0.55;
        const absOffset = Math.abs(offset);
        const result = (1 - (1 / ((absOffset * c / dimension) + 1))) * dimension;

        return Math.sign(offset) * result;
    }

    function stopMomentum(): void {
        if (!momentumAnimationId) {
            return;
        }

        cancelAnimationFrame(momentumAnimationId);
        momentumAnimationId = null;
    }

    function getSmoothedVelocity(): number {
        const samples = unref(velocitySamples);

        if (samples.length === 0) {
            return 0;
        }

        let totalWeight = 0;
        let weightedSum = 0;

        for (let i = 0; i < samples.length; i++) {
            const weight = i + 1;
            weightedSum += samples[i]! * weight;
            totalWeight += weight;
        }

        return weightedSum / totalWeight;
    }

    function startBounceBack(): void {
        const container = unref(containerRef);

        if (!container) {
            return;
        }

        const currentOffset = unref(overscrollOffset);
        const dimension = container.clientHeight;
        const displayOffset = rubberBand(currentOffset, dimension);

        const duration = Math.min(400, Math.max(200, Math.abs(displayOffset) * 3));

        container.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
        container.style.transform = 'translateY(0)';
        overscrollOffset.value = 0;
    }

    function startMomentumScroll(velocity: number): void {
        const container = unref(containerRef)!;

        if (!container) {
            return;
        }

        const dimension = container.clientHeight;
        let currentVelocity = velocity;
        let lastTimestamp = performance.now();

        function animate(timestamp: number) {
            const deltaTime = Math.min((timestamp - lastTimestamp) / 16.67, 2);
            lastTimestamp = timestamp;

            const maxScroll = container.scrollHeight - container.clientHeight;
            const deceleration = 0.95;
            currentVelocity *= Math.pow(deceleration, deltaTime);

            const newScrollTop = container.scrollTop + currentVelocity * deltaTime;

            if (newScrollTop < 0) {
                container.scrollTop = 0;

                const overscrollAmount = Math.min(dimension * 0.3, Math.abs(currentVelocity) * 8);
                overscrollOffset.value = overscrollAmount;

                const displayOffset = rubberBand(overscrollAmount, dimension);
                container.style.transform = `translateY(${displayOffset}px)`;

                requestAnimationFrame(() => startBounceBack());
            } else if (newScrollTop > maxScroll) {
                container.scrollTop = maxScroll;

                const overscrollAmount = -Math.min(dimension * 0.3, Math.abs(currentVelocity) * 8);
                overscrollOffset.value = overscrollAmount;

                const displayOffset = rubberBand(overscrollAmount, dimension);
                container.style.transform = `translateY(${displayOffset}px)`;

                requestAnimationFrame(() => startBounceBack());
            } else {
                container.scrollTop = newScrollTop;

                if (Math.abs(currentVelocity) > 0.1) {
                    momentumAnimationId = requestAnimationFrame(animate);
                }
            }
        }

        momentumAnimationId = requestAnimationFrame(animate);
    }

    function onTouchStart(evt: TouchEvent): void {
        stopMomentum();

        const container = unref(containerRef);

        if (!container) {
            return;
        }

        const touch = evt.touches[0]!;
        startY.value = touch.clientY;
        isDragging.value = true;

        lastY.value = touch.clientY;
        lastTime.value = Date.now();
        velocitySamples.value = [];

        initialScrollTop.value = container.scrollTop;

        container.style.transition = 'none';

        if (overscrollOffset.value === 0) {
            container.style.transform = 'translateY(0)';
        }

        evt.preventDefault();
    }

    function onTouchMove(evt: TouchEvent): void {
        if (!unref(isDragging)) {
            return;
        }

        const container = unref(containerRef);

        if (!container) {
            return;
        }

        const touch = evt.touches[0]!;
        const now = Date.now();
        const dt = now - unref(lastTime);

        if (dt > 0 && dt < 100) {
            const dy = unref(lastY) - touch.clientY;
            const velocity = (dy / dt) * 16;

            velocitySamples.value.push(velocity);
            if (velocitySamples.value.length > 5) {
                velocitySamples.value.shift();
            }
        }

        lastY.value = touch.clientY;
        lastTime.value = now;

        const deltaY = unref(startY) - touch.clientY;
        const maxScroll = container.scrollHeight - container.clientHeight;
        const targetScroll = unref(initialScrollTop) + deltaY;
        const dimension = container.clientHeight;

        if (targetScroll < 0) {
            container.scrollTop = 0;
            const overscroll = -targetScroll;
            overscrollOffset.value = overscroll;
            const displayOffset = rubberBand(overscroll, dimension);
            container.style.transform = `translateY(${displayOffset}px)`;
        } else if (targetScroll > maxScroll) {
            container.scrollTop = maxScroll;
            const overscroll = -(targetScroll - maxScroll);
            overscrollOffset.value = overscroll;
            const displayOffset = rubberBand(overscroll, dimension);
            container.style.transform = `translateY(${displayOffset}px)`;
        } else {
            container.scrollTop = targetScroll;
            overscrollOffset.value = 0;
            container.style.transform = 'translateY(0)';
        }

        evt.preventDefault();
    }

    function onTouchEnd(evt: TouchEvent): void {
        if (!isDragging.value) {
            return;
        }

        const container = containerRef.value;
        const velocity = getSmoothedVelocity();
        const wasOverscrolled = overscrollOffset.value !== 0;

        isDragging.value = false;

        if (container && wasOverscrolled) {
            startBounceBack();
        } else if (container && Math.abs(velocity) > 0.5) {
            startMomentumScroll(velocity);
        }

        evt.preventDefault();
    }
</script>
