import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('set_product_category')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.list.setProductCategory(args.product, args.category);
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
    readonly category: string;
};
