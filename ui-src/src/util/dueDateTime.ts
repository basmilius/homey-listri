import { DateTime } from 'luxon';

export default function dueDateTime(date: string, time?: string): DateTime {
    if (time) {
        return DateTime.fromFormat(`${date} ${time.length === 5 ? `${time}:00` : time}`, 'yyyy-MM-dd HH:mm:ss');
    }

    // Mirrors DATE_ONLY_TASK_EXPIRY_MODE in src/list/item.ts: a task without a time expires at the end of its day.
    return DateTime.fromFormat(date, 'yyyy-MM-dd').endOf('day');
}
