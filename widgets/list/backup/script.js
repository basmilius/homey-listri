import { computed, createApp, defineComponent, ref, unref, watch } from '../../assets/app/vue.js';
import { ScrollContainer } from '../../assets/app/elements.js';

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

const ListProductItem = defineComponent({
    emits: ['decrease', 'increase'],

    props: ['item'],

    template: `
        <div
            class="list-item list-item-product"
            :class="{'complete': item.completed, 'incomplete': !item.completed}">
            <Transition
                mode="out-in"
                name="check">
                <div v-if="item.completed" class="listri-icon list-item-icon complete"/>
                <div v-else class="listri-icon list-item-icon incomplete"/>
            </Transition>
                
            <div class="list-item-body">
                <div
                    v-if="item.quantity > 1"
                    class="list-item-quantity">
                    {{ item.quantity }}x
                </div>
            
                <div class="list-item-content">
                    <span>{{ item.content }}</span>
                </div>
                
                <div
                    v-if="!item.completed"
                    class="list-item-buttons">
                    <button
                        v-if="item.quantity > 1"
                        class="list-item-button"
                        data-interactive
                        @touchend.stop.prevent="$emit('decrease')">
                        <div class="listri-icon minus"/>
                    </button>
                    
                    <button
                        class="list-item-button"
                        data-interactive
                        @touchend.stop.prevent="$emit('increase')">
                        <div class="listri-icon plus"/>
                    </button>
                </div>
            </div>
        </div>
    `
});

const ListTaskItem = defineComponent({
    props: ['item'],

    template: `
        <div
            class="list-item list-item-task"
            :class="{'complete': item.completed, 'incomplete': !item.completed}">
            <Transition
                mode="out-in"
                name="check">
                <div v-if="item.completed" class="listri-icon list-item-icon complete"/>
                <div v-else class="listri-icon list-item-icon incomplete"/>
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

        return {
            due
        };
    }
});

const ListItemMount = defineComponent({
    emits: ['remove', 'tap'],
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
                @touchstart="onTouchStart"
                @touchmove="onTouchMove"
                @touchend="onTouchEnd"
                @touchcancel="onTouchEnd">
                <slot/>
            </div>
            <div
                class="list-item-mount-remove"
                @click="onDeleteClick"
                @touchend.stop.prevent="onDeleteClick">
                <div class="listri-icon"/>
            </div>
        </div>
    `,

    setup(_, {emit}) {
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

        function onDeleteClick() {
            isOpen.value = false;
            emit('remove');
        }

        function onTouchStart(evt) {
            if (isOpen.value) {
                return;
            }

            const touch = evt.touches[0];
            startX.value = touch.clientX;
            startY.value = touch.clientY;
            currentX.value = touch.clientX;
            currentY.value = touch.clientY;
            isDragging.value = true;
            isTap.value = true;

            touchedInteractive.value = evt.target.closest('[data-interactive]') !== null;
        }

        function onTouchMove(evt) {
            if (!isDragging.value) {
                return;
            }

            const touch = evt.touches[0];
            currentX.value = touch.clientX;
            currentY.value = touch.clientY;

            const deltaX = Math.abs(currentX.value - startX.value);
            const deltaY = Math.abs(currentY.value - startY.value);

            if (deltaX > 10 || deltaY > 10) {
                isTap.value = false;
            }
        }

        function onTouchEnd(evt) {
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

        return {
            x,
            isDragging,
            isOpen,

            onDeleteClick,
            onTouchStart,
            onTouchMove,
            onTouchEnd
        };
    }
});

const ListWidget = defineComponent({
    components: {
        ListItemMount,
        ListEmptyItem,
        ListNoteItem,
        ListProductItem,
        ListTaskItem,
        ScrollContainer
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
            
            <button
                class="list-add"
                @click="onAddTap">
                <div class="listri-icon"/>
            </button>
        </div>
        
        <Transition
            mode="out-in"
            name="check"
            @enter="updateHeight()">
            <ScrollContainer
                v-if="items.length > 0"
                class="list-items"
                tag="div">
                <TransitionGroup
                    name="items"
                    @after-enter="updateHeight()"
                    @after-leave="updateHeight()">
                    <ListItemMount
                        v-for="item of items"
                        :key="item.id"
                        @remove="removeItem(item.id)"
                        @tap="onItemTap(item)">
                        <ListNoteItem
                            v-if="item.type === 'note'"
                            :item="item"/>
                        
                        <ListProductItem
                            v-else-if="item.type === 'product'"
                            :item="item"
                            @decrease="decreaseQuantity(item.id)"
                            @increase="increaseQuantity(item.id)"/>
                        
                        <ListTaskItem
                            v-else-if="item.type === 'task'"
                            :item="item"/>
                    </ListItemMount>
                </TransitionGroup>
            </ScrollContainer>
            
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

        const decreaseQuantity = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value[index].quantity--;

            await Homey.api('POST', `/${props.deviceId}/items/${id}/quantity`, {
                quantity: -1
            });
        };

        const increaseQuantity = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value[index].quantity++;

            await Homey.api('POST', `/${props.deviceId}/items/${id}/quantity`, {
                quantity: 1
            });
        };

        const markComplete = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value[index].completed = true;

            await Homey.api('POST', `/${props.deviceId}/items/${id}/complete`);
        };

        const markIncomplete = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value[index].completed = false;

            await Homey.api('POST', `/${props.deviceId}/items/${id}/incomplete`);
        };

        const removeItem = async id => {
            const index = items.value.findIndex(item => item.id === id);
            items.value.splice(index, 1);

            await Homey.api('DELETE', `/${props.deviceId}/items/${id}`);
        };

        const onAddTap = async () => {
        };

        const onItemTap = async item => {
            switch (item.type) {
                case 'product':
                case 'task':
                    if (item.completed) {
                        await markIncomplete(item.id);
                    } else {
                        await markComplete(item.id);
                    }
                    break;

                default:
                    break;
            }
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

            decreaseQuantity,
            increaseQuantity,
            onAddTap,
            onItemTap,
            removeItem,
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
