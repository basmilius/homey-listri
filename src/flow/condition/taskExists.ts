import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { BasicListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('product_exists')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        return await args.list.findTask(args.product) !== null;
    }
}

type Args = {
    readonly list: BasicListDevice;
    readonly product: string;
};
