import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('remove_product')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findProductId(args.product);

        if (!id) {
            return;
        }

        await args.list.removeItem(id);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly product: string;
};
