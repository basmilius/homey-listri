import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('product_has_quantity')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        const product = await args.list.findProduct(args.product);

        return product?.quantity === args.quantity;
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
    readonly quantity: number;
};
