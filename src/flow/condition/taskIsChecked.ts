import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { BasicListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('task_is_checked')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        const task = await args.list.findTask(args.task);

        return task?.checked === true;
    }
}

type Args = {
    readonly list: BasicListDevice;
    readonly task: string;
};
