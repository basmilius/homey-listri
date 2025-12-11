import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('uncheck_product')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findProductId(args.product);

        if (!id) {
            return;
        }

        await args.list.check(id, false);
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
};
