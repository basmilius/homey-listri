import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('get_contents')
export default class extends FlowActionEntity<ListriApp, Args, never, Result> {
    async onRun(args: Args): Promise<Result> {
        return {
            content: await args.list.getContents(args.items)
        };
    }
}

type Args = {
    readonly list: ListDevice;
    readonly items: 'all' | 'open' | 'checked';
};

type Result = {
    readonly content: string;
};
