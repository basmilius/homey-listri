import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('move_unchecked')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.source_list.moveUncheckedItems(args.target_list);
    }
}

type Args = {
    readonly source_list: ListDevice;
    readonly target_list: ListDevice;
};
