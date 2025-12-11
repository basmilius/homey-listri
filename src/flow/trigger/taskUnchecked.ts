import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('task_unchecked')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice, Args, State> {
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
