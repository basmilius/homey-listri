import { App } from '@basmilius/homey-common';
import Homey from 'homey';
import { HomeyAPI, HomeyAPIV3Local } from 'homey-api';
import { Brain } from './brain';

import * as Actions from './flow/action';
import * as AutocompleteProviders from './flow/autocomplete';
import * as Conditions from './flow/condition';
import * as Triggers from './flow/trigger';

export default class ListriApp extends Homey.App {
    get api(): HomeyAPIV3Local {
        return this.#api;
    }

    get brain(): Brain {
        return this.#brain;
    }

    #api!: HomeyAPIV3Local;
    #brain!: Brain;

    async onInit() {
        try {
            this.#brain = new Brain(this.homey);
            this.#api = await HomeyAPI.createAppAPI({
                homey: this.homey
            });

            this.#registerAutocompleteProviders();
            this.#registerActions();
            this.#registerConditions();
            this.#registerTriggers();

            for (const provider of this.brain.registry.autocompleteProviders) {
                await provider.onInit();
            }

            this.log('Listri has been initialized');
        } catch (err) {
            this.log('Failed to initialize Listri', err);
        }
    }

    #registerActions(): void {
        this.brain.registry.action(Actions.CreateUserTask);
    }

    #registerAutocompleteProviders(): void {
        this.brain.registry.autocompleteProvider(AutocompleteProviders.Person);
    }

    #registerConditions(): void {
        // this.brain.registry.condition(Conditions.ModeIs);
    }

    #registerTriggers(): void {
        // this.brain.registry.trigger(Triggers.CycleBecomes);
    }
}
