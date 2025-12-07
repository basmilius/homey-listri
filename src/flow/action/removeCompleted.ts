import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('remove_completed')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.list.removeCompletedItems();
    }
}

type Args = {
    readonly list: ListDevice;
};
