import Homey from 'homey';
import type { Listri } from '../types';

export class ListDevice extends Homey.Device {

    async onLookChanged(): Promise<void> {
    }

}

export class ListDriver extends Homey.Driver {

    async onPair(session: Homey.Driver.PairSession): Promise<void> {
        await this.#onPairSession(session);
    }

    async onRepair(session: Homey.Driver.PairSession, device: ListDevice): Promise<void> {
        await this.#onPairSession(session);

        session.setHandler('fetch', async () => ({
            name: device.getName(),
            data: device.getStore()
        }));

        session.setHandler('save', async (data: { readonly name: string; readonly store: Record<'color' | 'icon', string>; }) => {
            await device.setStoreValue('color', data.store.color);
            await device.setStoreValue('icon', data.store.icon);
            await device.onLookChanged();
        });
    }

    async #onPairSession(session: Homey.Driver.PairSession): Promise<void> {
        const listri = this.homey.app as Listri;

        session.setHandler('colors', async () => await listri.brain.api.getColors());
        session.setHandler('icons', async () => await listri.brain.api.getIcons());
    }

}
