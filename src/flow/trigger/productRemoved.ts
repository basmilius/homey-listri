import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('product_removed')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice, never, State, Tokens> {
    async onRun(): Promise<boolean> {
        return true;
    }
}

type State = {
    readonly product: string;
    readonly quantity: number;
};

type Tokens = {
    readonly product: string;
    readonly quantity: number;
};
