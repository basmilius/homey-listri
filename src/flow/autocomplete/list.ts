import { autocomplete, FlowAutocompleteProvider } from '@basmilius/homey-common';
import type { FlowCard } from 'homey';
import type { ListriApp } from '../../types';

@autocomplete('list')
export default class extends FlowAutocompleteProvider<ListriApp> {
    async find(query: string): Promise<FlowCard.ArgumentAutocompleteResults> {
        const normalizedQuery = query.trim().toLowerCase();
        const hasQuery = normalizedQuery.length > 0;

        const devices = Object.values(await (this.app.api as any).devices.getDevices());

        return devices
            .filter((device: any) => device.driverUri === 'homey:app:com.basmilius.listri' && (device.driverId === 'list' || device.driverId === 'grocery_list'))
            .filter((device: any) => !hasQuery || device.name?.toLowerCase().includes(normalizedQuery))
            .map((device: any) => ({
                id: device.id,
                name: device.name ?? device.id
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }
}
