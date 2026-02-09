<template>
    <div
        :aria-checked="item ? 'checked' in item && item.checked ? 'true' : 'false' : undefined"
        :class="[
            direction === 'horizontal' ? $style.listItemHorizontal : $style.listItemVertical,
            completable && $style.isCompletable,
            tappable && $style.isTappable
        ]">
        <Transition
            mode="out-in"
            name="check">
            <Icon
                :key="icon"
                :class="$style.listItemIcon"
                :data-interactive="completable ? true : undefined"
                :icon="icon"/>
        </Transition>

        <div :class="$style.listItemBody">
            <slot/>
        </div>
    </div>
</template>

<script
    lang="ts"
    setup>
    import type { VNode } from 'vue';
    import type { ListItem as ListItemData } from '../../../src/list/item.ts';
    import { Icon } from '../components';

    const {
        direction = 'vertical'
    } = defineProps<{
        readonly completable?: boolean;
        readonly direction?: 'horizontal' | 'vertical';
        readonly icon: string;
        readonly item?: ListItemData;
        readonly tappable?: boolean;
    }>();

    defineSlots<{
        default: VNode[];
    }>();
</script>

<style
    lang="scss"
    module>
    .listItem {
        position: relative;
        display: flex;
        padding: var(--homey-su-4);
        align-items: flex-start;
        flex-flow: row nowrap;
        gap: var(--homey-su-4);
        justify-content: flex-start;
        background: var(--homey-color-mono-025);
        border-radius: var(--homey-border-radius-small);
        color: var(--homey-color-mono-800);
        font-size: 16px;
        font-weight: 500;
        transition: 150ms var(--swift-out);
        z-index: 0;

        &.isTappable:not(:has([data-interactive]:active)):active {
            background: var(--homey-color-mono-050);
            scale: .975;
        }
    }

    .listItemBody {
        display: flex;
        flex-flow: column;
        flex-grow: 1;
        gap: var(--homey-su-2);
    }

    .listItemIcon {
        --color: var(--homey-color-mono-500);
        --size: 20px;
    }

    .listItemIcon[data-interactive] {
        padding: var(--homey-su-2);
        margin: calc(-1 * var(--homey-su-2));
        cursor: pointer;
    }

    .listItemHorizontal {
        composes: listItem;

        .listItemBody {
            flex-flow: row nowrap;
        }
    }

    .listItemVertical {
        composes: listItem;

        .listItemBody {
            flex-flow: column nowrap;
        }
    }

    .listItem.isCompletable[aria-checked="true"] {
        color: var(--homey-color-mono-500);
        font-weight: 400;

        [data-content] {
            text-decoration-color: rgb(from var(--homey-color-mono-500) r g b / .5);
        }

        .listItemIcon {
            --color: var(--homey-color-green);
        }
    }

    :global(.homey-dark-mode) .listItem {
        background: rgb(from var(--homey-color-mono-100) r g b / .5);

        &.isTappable:not(:has([data-interactive]:active)):active {
            background: var(--homey-color-mono-100);
        }
    }
</style>
