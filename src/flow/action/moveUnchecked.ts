import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';
import { AutocompleteProviders } from '..';

@action('move_unchecked')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onInit(): Promise<void> {
        this.registerAutocomplete('target_list', AutocompleteProviders.List);

        await super.onInit();
    }

    async onRun(args: Args): Promise<void> {
        // Get the target device from the list or grocery_list drivers
        const listDriver = this.app.homey.drivers.getDriver('list');
        const groceryListDriver = this.app.homey.drivers.getDriver('grocery_list');
        
        let targetList: ListDevice | null = null;
        
        try {
            targetList = listDriver.getDevice({ id: args.target_list.id }) as ListDevice;
        } catch {
            try {
                targetList = groceryListDriver.getDevice({ id: args.target_list.id }) as ListDevice;
            } catch {
                throw new Error(`Target list with id ${args.target_list.id} not found`);
            }
        }
        
        await args.list.moveUncheckedItems(targetList);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly target_list: {
        readonly id: string;
        readonly name: string;
    };
};
