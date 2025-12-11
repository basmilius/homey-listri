import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('set_product_quantity')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.list.setProductQuantity(args.product, args.quantity);
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
    readonly quantity: number;
};
