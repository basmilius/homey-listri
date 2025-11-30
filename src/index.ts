import { App } from '@basmilius/homey-common';
import { HomeyAPI, HomeyAPIV3Local } from 'homey-api';
import { Actions, AutocompleteProviders, Conditions, Triggers } from './flow';

export default class ListriApp extends App<ListriApp> {

    get api(): HomeyAPIV3Local {
        return this.#api;
    }

    #api!: HomeyAPIV3Local;

    async onInit() {
        try {
            this.#api = await HomeyAPI.createAppAPI({
                homey: this.homey
            });
            this.#api.isConnected();

            this.#registerAutocompleteProviders();
            this.#registerActions();
            this.#registerConditions();
            this.#registerTriggers();

            for (const provider of this.registry.autocompleteProviders) {
                await provider.onInit();
            }

            this.log('Listri has been initialized');
        } catch (err) {
            this.log('Failed to initialize Listri', err);
        }
    }

    #registerActions(): void {
        this.registry.action(Actions.ClearList);
        this.registry.action(Actions.CreateNote);
        this.registry.action(Actions.CreatePersonTask);
        this.registry.action(Actions.CreatePlannedTask);
        this.registry.action(Actions.CreatePlannedPersonTask);
        this.registry.action(Actions.CreateTask);
        this.registry.action(Actions.MarkTaskDone);
        this.registry.action(Actions.MarkTaskOpen);
        this.registry.action(Actions.RemoveNote);
        this.registry.action(Actions.RemoveTask);
    }

    #registerAutocompleteProviders(): void {
        this.registry.autocompleteProvider(AutocompleteProviders.Person);
    }

    #registerConditions(): void {
        this.registry.condition(Conditions.NoteExists);
        this.registry.condition(Conditions.TaskExists);
        this.registry.condition(Conditions.TaskIs);
    }

    #registerTriggers(): void {
        this.registry.deviceTrigger(Triggers.AnyTaskMarkedAsDone);
        this.registry.deviceTrigger(Triggers.AnyTaskMarkedAsOpen);
        this.registry.deviceTrigger(Triggers.TaskMarkedAsDone);
        this.registry.deviceTrigger(Triggers.TaskMarkedAsOpen);
    }

}
