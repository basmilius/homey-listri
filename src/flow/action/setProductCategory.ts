import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { GroceryListDevice } from '../../list';
import type { ListriApp } from '../../types';
import { AutocompleteProviders } from '..';

@action('set_product_category')
export default class extends FlowActionEntity<ListriApp, Args> {
    async onInit(): Promise<void> {
        this.registerAutocomplete('category', AutocompleteProviders.Category);

        await super.onInit();
    }

    async onRun(args: Args): Promise<void> {
        await args.list.setProductCategory(args.product, args.category.id);
    }
}

type Args = {
    readonly list: GroceryListDevice;
    readonly product: string;
    readonly category: {
        readonly id: string;
        readonly name: string;
        readonly image: string | undefined;
    };
};
