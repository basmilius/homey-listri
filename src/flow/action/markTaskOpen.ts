import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('mark_task_open')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findTaskId(args.task);

        if (!id) {
            return;
        }

        await args.list.markAsOpen(id);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly task: string;
};
