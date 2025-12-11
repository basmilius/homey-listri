import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('product_quantity_changed')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice, Args, State, Tokens> {
    async onRun(args: Args, state: State): Promise<boolean> {
        return args.product === state.product;
    }
}

type Args = {
    readonly product: string;
};

type State = {
    readonly product: string;
    readonly quantity: number;
};

type Tokens = {
    readonly quantity: number;
};
