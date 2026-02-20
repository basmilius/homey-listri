import { autocomplete, FlowAutocompleteProvider } from '@basmilius/homey-common';
import type { FlowCard } from 'homey';
import type { ListriApp } from '../../types';

const APP_URI = 'homey:app:com.basmilius.listri';
const LIST_DRIVER_ID = 'list';
const GROCERY_LIST_DRIVER_ID = 'grocery_list';

@autocomplete('list')
export default class extends FlowAutocompleteProvider<ListriApp> {
    async find(query: string): Promise<FlowCard.ArgumentAutocompleteResults> {
        const normalizedQuery = query.trim().toLowerCase();
        const hasQuery = normalizedQuery.length > 0;

        const devices = Object.values(await (this.app.api as any).devices.getDevices());

        return devices
            .filter((device: any) => device.driverUri === APP_URI && (device.driverId === LIST_DRIVER_ID || device.driverId === GROCERY_LIST_DRIVER_ID))
            .filter((device: any) => !hasQuery || device.name?.toLowerCase().includes(normalizedQuery))
            .map((device: any) => ({
                id: device.id,
                name: device.name ?? device.id
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }
}
