import { computed, createApp, defineComponent, ref, unref, watch } from '../../assets/app/vue.js';

const formatter = new Intl.DateTimeFormat(navigator.language, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});

const formatterYear = new Intl.DateTimeFormat(navigator.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});

const formatterTime = new Intl.DateTimeFormat(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
});

const ListEmptyItem = defineComponent({
    template: `
        <div class="list-item list-item-empty">
            <div class="listri-icon list-item-icon"/>
            <div class="list-item-body">
                <div class="list-item-content">
                    {{ t('widget.list.no_items') }}
                </div>
            </div>
        </div>
    `
});

const ListNoteItem = defineComponent({
    props: ['item'],

    template: `
        <div class="list-item list-item-note">
            <div class="listri-icon list-item-icon"/>
            <div class="list-item-body">
                <div class="list-item-content">
                    {{ item.content }}
                </div>
            </div>
        </div>
    `
});

const ListTaskItem = defineComponent({
    emits: ['mark-as-done', 'mark-as-open'],

    props: ['item'],

    template: `
        <div
            class="list-item list-item-task"
            :class="{'completed': item.completed, 'open': !item.completed}"
            @click="onClick">
            <Transition
                mode="out-in"
                name="check">
                <div v-if="item.completed" class="listri-icon list-item-icon completed"/>
                <div v-else class="listri-icon list-item-icon open"/>
            </Transition>
                
            <div class="list-item-body">
                <div class="list-item-content">
                    {{ item.content }}
                </div>
                
                <div
                    v-if="item.person || due"
                    class="list-item-footer">
                    <div
                        v-if="item.person"
                        class="list-item-person">
                        <img
                            :src="item.person.image"
                            :alt="item.person.name">
                            
                        <span>{{ item.person.name }}</span>
                    </div>
                    
                    <div
                        v-if="due"
                        class="list-item-date">
                        {{ due }}
                    </div>
                </div>
            </div>
        </div>
    `,

    setup(props, {emit}) {
        const due = computed(() => {
            if (!props.item.due) {
                return null;
            }

            const date = new Date(props.item.due);
            const now = new Date();

            if (now.toDateString() === date.toDateString()) {
                return `${Homey.__('widget.list.today_at')} ${formatterTime.format(date)}`;
            }

            if (now.getFullYear() === date.getFullYear()) {
                return formatter.format(date);
            }

            return formatterYear.format(date);
        });

        async function onClick() {
            if (props.item.completed) {
                emit('mark-as-open');
            } else {
                emit('mark-as-done');
            }
        }

        return {
            due,
            onClick
        };
    }
});

const ListItemMount = defineComponent({
    emits: ['remove'],
    slots: ['default'],

    template: `
        <div
            class="list-item-mount"
            :class="{
                'is-dragging': isDragging,
                'is-open': isOpen
            }"
            :style="{
                '--x': x + 'px'
            }">
            <div
                class="list-item-mount-body"
                @pointerdown="onPointerDown"
                @pointermove="onPointerMove"
                @pointerup="onPointerUp"
                @pointercancel="onPointerUp">
                <slot/>
            </div>
            <div
                class="list-item-mount-remove"
                @click="onDeleteClick">
                <div class="listri-icon"/>
            </div>
        </div>
    `,

    setup(_, {emit}) {
        const isDragging = ref(false);
        const isOpen = ref(false);
        const startX = ref(0);
        const currentX = ref(0);

        const x = computed(() => {
            if (!isDragging.value) {
                return isOpen.value ? -90 : 0;
            }

            const delta = startX.value - currentX.value;

            return -Math.max(0, Math.min(90, delta));
        });

        function onDeleteClick() {
            isOpen.value = false;
            emit('remove');
        }

        function onPointerDown(evt) {
            if (isOpen.value) {
                return;
            }

            startX.value = evt.clientX + (isOpen.value ? -90 : 0);
            currentX.value = evt.clientX;
            isDragging.value = true;
            evt.currentTarget.setPointerCapture(evt.pointerId);

            evt.preventDefault();
            evt.stopPropagation();
        }

        function onPointerMove(evt) {
            if (!isDragging.value) {
                return;
            }

            currentX.value = evt.clientX;

            evt.preventDefault();
            evt.stopPropagation();
        }

        function onPointerUp(evt) {
            if (isOpen.value) {
                setTimeout(() => isOpen.value = false, 50);

                evt.preventDefault();
                evt.stopPropagation();

                return;
            }

            if (!isDragging.value) {
                return;
            }

            isDragging.value = false;

            const delta = startX.value - currentX.value;
            isOpen.value = delta > 45;
            evt.currentTarget.releasePointerCapture(evt.pointerId);

            evt.preventDefault();
            evt.stopPropagation();
        }

        return {
            x,
            isDragging,
            isOpen,

            onDeleteClick,
            onPointerDown,
            onPointerMove,
            onPointerUp
        };
    }
});

const ListWidget = defineComponent({
    components: {
        ListItemMount,
        ListEmptyItem,
        ListNoteItem,
        ListTaskItem
    },

    props: ['deviceId'],

    template: `
        <div class="list-header">
            <div
                class="listri-icon"
                :style="{
                    '--color': look?.color,
                    '--icon': iconPrimary,
                    '--icon-secondary': iconSecondary
                }"/>
            
            <div class="list-name homey-text-bold">
                {{ look?.name ?? '-' }}
            </div>
        </div>
        
        <Transition
            mode="out-in"
            name="check"
            @enter="updateHeight()">
            <TransitionGroup
                v-if="items.length > 0"
                class="list-items"
                mode="out-in"
                name="items"
                tag="div"
                @after-enter="updateHeight()"
                @after-leave="updateHeight()">
                <ListItemMount
                    v-for="item of items"
                    :key="item.id"
                    @remove="removeItem(item.id)">
                    <ListNoteItem
                        v-if="item.type === 'note'"
                        :item="item"/>
                    
                    <ListTaskItem
                        v-else-if="item.type === 'task'"
                        :item="item"
                        @mark-as-done="markTaskDone(item.id)"
                        @mark-as-open="markTaskOpen(item.id)"/>
                </ListItemMount>
            </TransitionGroup>
            
            <div
                v-else
                class="list-items">
                <ListEmptyItem/>
            </div>
        </Transition>
    `,

    setup(props) {
        const isLoading = ref(true);
        const items = ref([]);
        const look = ref(null);

        const iconPrimary = computed(() => JSON.stringify(unref(look)?.icon));
        const iconSecondary = computed(() => JSON.stringify(unref(look)?.icon + unref(look)?.icon));

        const markTaskDone = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value[index].completed = true;

            await Homey.api('POST', `/${props.deviceId}/items/${id}/done`);
        };

        const markTaskOpen = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value[index].completed = false;

            await Homey.api('POST', `/${props.deviceId}/items/${id}/open`);
        };

        const removeItem = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value.splice(index, 1);

            await Homey.api('DELETE', `/${props.deviceId}/items/${id}`);
        };

        const updateHeight = () => {
            const list = document.querySelector('.list-widget');
            const {height} = list.getBoundingClientRect();
            Homey.setHeight(height);
        };

        const updateItems = async () => {
            items.value = await Homey.api('GET', `/${props.deviceId}/items`);
        };

        const updateLook = async () => {
            look.value = await Homey.api('GET', `/${props.deviceId}`);
        };

        Homey.on('list-items-changed', async deviceId => {
            if (deviceId !== props.deviceId) {
                return;
            }

            await updateItems();
        });

        Homey.on('list-look-changed', async deviceId => {
            if (deviceId !== props.deviceId) {
                return;
            }

            await updateLook();
        });

        watch(() => props.deviceId, async () => {
            isLoading.value = true;

            await updateLook();
            await updateItems();

            isLoading.value = false;
        }, {immediate: true});

        watch(items, updateHeight, {flush: 'post'});

        return {
            isLoading,
            items,
            look,

            iconPrimary,
            iconSecondary,

            removeItem,
            markTaskDone,
            markTaskOpen,
            updateHeight
        };
    }
});

const app = createApp({
    components: {
        ListWidget
    },

    template: `
        <ListWidget
            v-if="ready && deviceId"
            :device-id="deviceId"/>
    `,

    setup() {
        const deviceId = ref(null);
        const ready = ref(false);

        window.addEventListener('homeyReady', () => {
            const deviceIds = Homey.getDeviceIds();

            deviceId.value = deviceIds[0] ?? null;
            ready.value = true;

            Homey.ready();
        });

        return {
            deviceId,
            ready
        };
    }
});

app.config.globalProperties.t = key => Homey.__(key) ?? key;

app.mount('#app');
