import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('task_exists')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        return await args.list.findTaskId(args.task) !== null;
    }
}

type Args = {
    readonly list: ListDevice;
    readonly task: string;
};
