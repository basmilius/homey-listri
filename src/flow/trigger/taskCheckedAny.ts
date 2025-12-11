import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('task_checked_any')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice, never, State, Tokens> {
    async onRun(): Promise<boolean> {
        return true;
    }
}

type State = {
    readonly task: string;
};

type Tokens = {
    readonly task: string;
};
