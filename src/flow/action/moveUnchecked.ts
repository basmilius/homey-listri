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
        // Get the target device from the driver
        const drivers = this.app.homey.drivers.getDrivers();
        let targetList: ListDevice | null = null;
        
        for (const driver of Object.values(drivers)) {
            const device = driver.getDevice({ id: args.target_list.id });
            if (device) {
                targetList = device as ListDevice;
                break;
            }
        }
        
        if (!targetList) {
            throw new Error(`Target list with id ${args.target_list.id} not found`);
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
