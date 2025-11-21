import type Homey from 'homey/lib/Homey';
import Api from './api';
import Registry from './registry';

export default class {
    get homey(): Homey {
        return this.#homey;
    }

    get api(): Api {
        return this.#api;
    }

    get registry(): Registry {
        return this.#registry;
    }

    readonly #homey: Homey;
    readonly #api: Api;
    readonly #registry: Registry;

    constructor(homey: Homey) {
        this.#homey = homey;
        this.#registry = new Registry(this);
        this.#api = new Api(this);
    }
}
