import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('get_contents_markdown')
export default class extends FlowActionEntity<ListriApp, Args, never, Result> {
    async onRun(args: Args): Promise<Result> {
        return {
            content: await args.list.getContentsMarkdown(args.items)
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
