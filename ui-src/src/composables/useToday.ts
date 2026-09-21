import { DateTime } from 'luxon';
import { shallowReadonly, shallowRef } from 'vue';

const today = shallowRef(DateTime.now().startOf('day'));

let started = false;

function schedule(): void {
    const start = DateTime.now().startOf('day');

    // A timer may fire a moment before midnight, so the day is re-read rather than assumed to have advanced.
    if (+start !== +today.value) {
        today.value = start;
    }

    window.setTimeout(schedule, start.plus({days: 1}).diff(DateTime.now()).toMillis());
}

export default function () {
    if (!started) {
        started = true;
        schedule();
    }

    return shallowReadonly(today);
}
