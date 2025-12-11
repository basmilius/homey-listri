import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { BasicListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('check_task')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findTaskId(args.task);

        if (!id) {
            return;
        }

        await args.list.check(id);
    }
}

type Args = {
    readonly list: BasicListDevice;
    readonly task: string;
};
