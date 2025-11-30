import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('add_task')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        await args.list.addTask(args.task);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly task: string;
};
