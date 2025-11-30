import { FlowDeviceTriggerEntity, trigger } from '@basmilius/homey-common';
import type { ListDevice } from '../../list';
import type { ListriApp } from '../../types';

@trigger('any_task_marked_as_done')
export default class extends FlowDeviceTriggerEntity<ListriApp, ListDevice> {
    async onRun(): Promise<boolean> {
        return true;
    }
}
