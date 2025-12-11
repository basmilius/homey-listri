import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('check_product')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findProductId(args.product);

        if (!id) {
            return;
        }

        await args.list.check(id);
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
};
