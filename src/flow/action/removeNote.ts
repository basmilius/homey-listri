import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@action('remove_note')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<void> {
        const id = await args.list.findItemId(args.note);

        if (!id) {
            return;
        }

        await args.list.removeItem(id);
    }
}

type Args = {
    readonly list: ListDevice;
    readonly note: string;
};
