import { App, DateTime } from '@basmilius/homey-common';
import { HomeyAPI, HomeyAPIV3Local } from 'homey-api';
import { Actions, AutocompleteProviders, Conditions, Triggers } from './flow';
import type { BasicListDevice } from './list';
import type { TaskListItem } from './list/item';

export default class ListriApp extends App<ListriApp> {

    get api(): HomeyAPIV3Local {
        return this.#api;
    }

    #api!: HomeyAPIV3Local;
    #deadlineCheckInterval?: NodeJS.Timeout;
    #notifiedDeadlines: Set<string> = new Set();

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

            this.#startDeadlineChecker();

            this.log('Listri has been initialized');
        } catch (err) {
            this.log('Failed to initialize Listri', err);
        }
    }

    #registerActions(): void {
        this.registry.action(Actions.AddNote);
        this.registry.action(Actions.AddPersonTask);
        this.registry.action(Actions.AddPlannedTask);
        this.registry.action(Actions.AddPlannedPersonTask);
        this.registry.action(Actions.AddProduct);
        this.registry.action(Actions.AddProductQuantity);
        this.registry.action(Actions.AddTask);
        this.registry.action(Actions.ClearList);
        this.registry.action(Actions.CheckProduct);
        this.registry.action(Actions.CheckTask);
        this.registry.action(Actions.GetContents);
        this.registry.action(Actions.GetContentsMarkdown);
        this.registry.action(Actions.RemoveChecked);
        this.registry.action(Actions.RemoveNote);
        this.registry.action(Actions.RemoveProduct);
        this.registry.action(Actions.RemoveTask);
        this.registry.action(Actions.SetProductCategory);
        this.registry.action(Actions.SetProductQuantity);
        this.registry.action(Actions.UncheckProduct);
        this.registry.action(Actions.UncheckTask);
    }

    #registerAutocompleteProviders(): void {
        this.registry.autocompleteProvider(AutocompleteProviders.Category);
        this.registry.autocompleteProvider(AutocompleteProviders.Person);
    }

    #registerConditions(): void {
        this.registry.condition(Conditions.NoteExists);
        this.registry.condition(Conditions.ProductExists);
        this.registry.condition(Conditions.ProductHasQuantity);
        this.registry.condition(Conditions.ProductIsChecked);
        this.registry.condition(Conditions.TaskExists);
        this.registry.condition(Conditions.TaskIsChecked);
    }

    #registerTriggers(): void {
        this.registry.deviceTrigger(Triggers.NoteCreated);
        this.registry.deviceTrigger(Triggers.NoteRemoved);
        this.registry.deviceTrigger(Triggers.ProductChecked);
        this.registry.deviceTrigger(Triggers.ProductCheckedAny);
        this.registry.deviceTrigger(Triggers.ProductCreated);
        this.registry.deviceTrigger(Triggers.ProductQuantityChanged);
        this.registry.deviceTrigger(Triggers.ProductRemoved);
        this.registry.deviceTrigger(Triggers.ProductUnchecked);
        this.registry.deviceTrigger(Triggers.ProductUncheckedAny);
        this.registry.deviceTrigger(Triggers.TaskChecked);
        this.registry.deviceTrigger(Triggers.TaskCheckedAny);
        this.registry.deviceTrigger(Triggers.TaskCreated);
        this.registry.deviceTrigger(Triggers.TaskRemoved);
        this.registry.deviceTrigger(Triggers.TaskUnchecked);
        this.registry.deviceTrigger(Triggers.TaskUncheckedAny);
        this.registry.deviceTrigger(Triggers.TaskDeadlineDue);
    }

    async onUninit(): Promise<void> {
        if (this.#deadlineCheckInterval) {
            clearTimeout(this.#deadlineCheckInterval);
        }
    }

    #startDeadlineChecker(): void {
        // Check every minute for due tasks
        const scheduleNextCheck = () => {
            this.#deadlineCheckInterval = setTimeout(async () => {
                await this.#checkDeadlines();
                scheduleNextCheck();
            }, 60000); // 60 seconds
        };

        // Run immediately on startup
        this.#checkDeadlines()
            .catch(err => {
                this.log('Failed to check deadlines on startup', err);
            })
            .finally(() => {
                scheduleNextCheck();
            });
    }

    async #checkDeadlines(): Promise<void> {
        try {
            const now = DateTime.now();
            const oneHourAgo = now.minus({ hours: 1 });
            const devices = this.homey.drivers.getDriver('list').getDevices() as BasicListDevice[];

            for (const device of devices) {
                const tasks = device.items.filter(item => item.type === 'task') as TaskListItem[];

                for (const task of tasks) {
                    const uniqueKey = `${device.id}-${task.id}`;
                    
                    // Skip tasks without deadline or already checked
                    if (!task.due || task.checked) {
                        // Clear notification if the task is completed or deadline removed
                        if (this.#notifiedDeadlines.has(uniqueKey)) {
                            this.#notifiedDeadlines.delete(uniqueKey);
                        }
                        continue;
                    }

                    // Check if the deadline is reached (within the last hour to avoid old tasks)
                    // and not yet notified
                    if (task.due <= now && task.due >= oneHourAgo && !this.#notifiedDeadlines.has(uniqueKey)) {
                        // Mark as notified
                        this.#notifiedDeadlines.add(uniqueKey);

                        // Prepare trigger data
                        const triggerState = { task: task.content };
                        const triggerTokens = {
                            task: task.content,
                            person: task.person?.name ?? '',
                            due: task.due.toISO() ?? ''
                        };

                        // Trigger the flow card
                        await this.registry
                            .findDeviceTrigger(Triggers.TaskDeadlineDue)
                            ?.trigger(device, triggerState, triggerTokens);

                        this.log(`Task deadline due: ${task.content} in list ${device.getName()}`);
                    }
                }
            }
        } catch (err) {
            this.log('Failed to check deadlines', err);
        }
    }

}
