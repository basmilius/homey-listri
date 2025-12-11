import { action, DateTime, FlowActionEntity } from '@basmilius/homey-common';
import type { BasicListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('add_planned_task')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const due = DateTime.fromFormat(`${args.date} ${args.time ?? '00:00'}`, 'dd-MM-yyyy HH:mm', {zone: this.homey.clock.getTimezone()});

        await args.list.addTask(args.task, due);
    }
}

type Args = {
    readonly list: BasicListDevice;
    readonly task: string;
    readonly date: string;
    readonly time?: string;
};
