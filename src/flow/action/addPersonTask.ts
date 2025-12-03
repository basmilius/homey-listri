import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';
import { AutocompleteProviders } from '..';

@action('add_person_task')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onInit(): Promise<void> {
        this.registerAutocomplete('person', AutocompleteProviders.Person);

        await super.onInit();
    }

    async onRun(args: Args): Promise<void> {
        await args.list.addTask(args.task, undefined, undefined, args.person);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly task: string;
    readonly person: {
        readonly id: string;
        readonly name: string;
        readonly image: string | undefined;
    };
};
