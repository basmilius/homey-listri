import { ListDevice, ListDriver } from './base';

export class GroceryListDevice extends ListDevice<GroceryListDriver> {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log(`Grocery list "${this.getName()}" has been initialized.`);
    }

    async onLookChanged(): Promise<void> {
        // todo(Bas): Notify widget(s).
    }

}

export class GroceryListDriver extends ListDriver {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log('Grocery list driver has been initialized.');
    }

}
