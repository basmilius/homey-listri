import { DateTime } from 'luxon';

// Mirrors the parsing rules of dueDateTime in src/list/item.ts, which pulls in @basmilius/homey-common and cannot be bundled into the widget.
// DATE_ONLY_TASK_EXPIRY_MODE is inlined as its 'endOf' default; changing it there means changing this too.
// The app parses in the Homey timezone (src/index.ts) while the widget parses in the browser zone, so both only agree while the dashboard shares that timezone.
export default function dueDateTime(date: string, time?: string): DateTime {
    if (!DateTime.fromFormat(date, 'yyyy-MM-dd').isValid) {
        date = DateTime.fromFormat(date, 'dd-MM-yyyy').toFormat('yyyy-MM-dd');
    }

    if (time) {
        return DateTime.fromFormat(`${date} ${time.length === 5 ? `${time}:00` : time}`, 'yyyy-MM-dd HH:mm:ss');
    }

    return DateTime.fromFormat(date, 'yyyy-MM-dd').endOf('day');
}
