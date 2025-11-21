import { BaseAction } from '../base';
import { action } from '../decorator';

import * as AutocompleteProviders from '../autocomplete';

@action('create_user_task')
export default class extends BaseAction<Args> {
    async onInit(): Promise<void> {
        this.registerAutocomplete('person', AutocompleteProviders.Person);

        await super.onInit();
    }

    async onRun(args: Args): Promise<void> {
        console.log(args);
    }
}

type Args = {
    readonly max_value: number;
    readonly person: {
        readonly id: string;
        readonly name: string;
        readonly photo: string | undefined;
    };
};
