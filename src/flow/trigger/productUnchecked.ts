import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('product_unchecked')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice, Args, State> {
    async onRun(args: Args, state: State): Promise<boolean> {
        return args.product === state.product;
    }
}

type Args = {
    readonly product: string;
};

type State = {
    readonly product: string;
};
