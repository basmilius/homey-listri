import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('product_exists')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        return await args.list.findProductId(args.product) !== null;
    }
}

type Args = {
    readonly list: ListDevice;
    readonly product: string;
};
