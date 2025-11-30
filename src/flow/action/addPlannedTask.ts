import { action, FlowActionEntity } from '@basmilius/homey-common';
import { DateTime } from 'luxon';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('add_planned_task')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const due = DateTime.fromFormat(`${args.date} ${args.time ?? '00:00'}`, 'dd-MM-yyyy HH:mm', {zone: this.homey.clock.getTimezone()});
        await args.list.addTask(args.task, undefined, due);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly task: string;
    readonly date: string;
    readonly time?: string;
};
