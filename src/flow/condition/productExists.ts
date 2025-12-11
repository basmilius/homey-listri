import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('product_exists')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        return await args.list.findProduct(args.product) !== null;
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
};
