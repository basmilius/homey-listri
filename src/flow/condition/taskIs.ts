import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { ListriApp } from '../../types';

@condition('task_is')
export default class extends FlowConditionEntity<ListriApp, Args, State> {
    async onRun(args: Args, state: State): Promise<boolean> {
        return args.task === state.task;
    }
}

type Args = {
    readonly task: string;
};

type State = {
    readonly task: string;
};
