import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('mark_task_done')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findItemId(args.task);

        if (!id) {
            return;
        }

        await args.list.markAsDone(id);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly task: string;
};
