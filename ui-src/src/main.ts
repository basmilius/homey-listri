// @ts-ignore
import './css/index.scss';

import { fluxRegisterIcons } from '@flux-ui/components';
import { createPinia } from 'pinia';
import { type App, type Component, createApp } from 'vue';
import ListWidget from './list/ListWidget.vue';
import PairView from './pair/PairView.vue';
import RepairView from './repair/RepairView.vue';

import * as icons from './icons';

fluxRegisterIcons(icons);

export * from './components';
export * from './composables';

function create(root: Component, selector: string): App {
    const app = createApp(root);
    app.config.globalProperties.t = (key: string) => Homey.__(key) ?? key;
    app.use(createPinia());
    app.mount(selector);

    return app;
}

export function createListWidget(selector: string): void {
    create(ListWidget, selector);
}

export function createPairView(selector: string): void {
    create(PairView, selector);
}

export function createRepairView(selector: string): void {
    create(RepairView, selector);
}

(window as any).onHomeyReady = function () {
    if (document.documentElement.classList.contains('homey-dark-mode')) {
        document.documentElement.setAttribute('dark', 'dark');
    }

    window.dispatchEvent(new CustomEvent('homeyReady'));
};
