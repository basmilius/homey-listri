import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('note_created')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice, never, State, Tokens> {
    async onRun(): Promise<boolean> {
        return true;
    }
}

type State = {
    readonly note: string;
};

type Tokens = {
    readonly note: string;
};
