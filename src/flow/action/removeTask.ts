import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { BasicListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('remove_task')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.list.removeTask(args.task);
    }
}

type Args = {
    readonly list: BasicListDevice;
    readonly task: string;
};
