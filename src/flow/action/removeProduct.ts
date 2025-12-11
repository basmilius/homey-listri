import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('remove_product')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.list.removeProduct(args.product);
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
};
