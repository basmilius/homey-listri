import { ListDevice, ListDriver } from './base';

export class BasicListDevice extends ListDevice<BasicListDriver> {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log(`Basic list "${this.getName()}" has been initialized.`);
    }

}

export class BasicListDriver extends ListDriver {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log('Basic list driver has been initialized.');
    }

}
