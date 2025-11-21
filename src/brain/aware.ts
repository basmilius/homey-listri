import type Homey from 'homey/lib/Homey';
import type ManagerDashboards from 'homey/manager/dashboards';
import type { Language, Listri } from '../types';
import type Api from './api';
import type Brain from './brain';
import type Registry from './registry';

export default class BrainAware {
    get app(): Listri {
        return this.homey.app as Listri;
    }

    get brain(): Brain {
        return this.#brain;
    }

    get homey(): Homey {
        return this.brain.homey;
    }

    get dashboards(): ManagerDashboards {
        return this.homey.dashboards;
    }

    get settings(): Homey.ManagerSettings {
        return this.homey.settings;
    }

    get language(): Language {
        return this.homey.i18n.getLanguage() as Language;
    }

    get api(): Api {
        return this.brain.api;
    }

    get registry(): Registry {
        return this.brain.registry;
    }

    readonly #brain: Brain;

    constructor(brain: Brain) {
        this.#brain = brain;
    }

    async notify(message: string): Promise<void> {
        await this.homey.notifications.createNotification({
            excerpt: message
        });
    }

    log(...args: any[]): void {
        this.homey.log(...args);
    }

    realtime(event: string, data: any = undefined): void {
        this.homey.api.realtime(event, data);
    }

    translate(key: string, tags?: Record<string, string | number>): string {
        return this.homey.__(key, tags);
    }

    clearInterval(interval: NodeJS.Timeout): void {
        this.homey.clearInterval(interval);
    }

    setInterval(callback: Function, ms: number): NodeJS.Timeout {
        return this.homey.setInterval(callback, ms);
    }

    clearTimeout(interval: NodeJS.Timeout): void {
        this.homey.clearTimeout(interval);
    }

    setTimeout(callback: Function, ms: number): NodeJS.Timeout {
        return this.homey.setTimeout(callback, ms);
    }
}
