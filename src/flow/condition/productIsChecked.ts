import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('product_is_checked')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        const product = await args.list.findProduct(args.product);

        return product?.checked === true;
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
};
