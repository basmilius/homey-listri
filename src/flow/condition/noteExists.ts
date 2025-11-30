import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@condition('note_exists')
export default class extends FlowConditionEntity<ListriApp, Args> {
    async onRun(args: Args): Promise<boolean> {
        return await args.list.findNoteId(args.note) !== null;
    }
}

type Args = {
    readonly list: ListDevice;
    readonly note: string;
};
