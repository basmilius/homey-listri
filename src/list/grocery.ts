import { Triggers } from '../flow';
import { ListDevice, ListDriver } from './base';
import type { ProductListItem } from './item';

export class GroceryListDevice extends ListDevice<GroceryListDriver> {

    get products(): ProductListItem[] {
        return this.items.filter(item => item.type === 'product');
    }

    async check(id: string, checked: boolean = true): Promise<boolean> {
        const item = await this.find(id);
        const result = await super.check(id, checked);

        if (!result || !item || item.type !== 'product') {
            return false;
        }

        if (checked) {
            await Promise.allSettled([
                this.appDriver.triggerProductChecked(this, item.content),
                this.appDriver.triggerProductCheckedAny(this, item.content, item.quantity)
            ]);
        } else {
            await Promise.allSettled([
                this.appDriver.triggerProductUnchecked(this, item.content),
                this.appDriver.triggerProductUncheckedAny(this, item.content, item.quantity)
            ]);
        }

        return true;
    }

    async addProduct(content: string, quantity: number = 1, category?: string): Promise<void> {
        if (category && category.trim().length === 0) {
            category = undefined;
        }

        await this.add<ProductListItem>({
            type: 'product',
            checked: false,
            category,
            content,
            quantity
        });

        await this.appDriver.triggerProductCreated(this, content, quantity);
    }

    async editProduct(id: string, content: string, quantity: number = 1, category?: string): Promise<boolean> {
        const item = await this.find(id);

        if (!item || item.type !== 'product') {
            return false;
        }

        if (category && category.trim().length === 0) {
            category = undefined;
        }

        // todo(Bas): Maybe add a trigger card here for when a product is changed.
        await this.update(item, {
            content,
            quantity,
            category
        });

        return true;
    }

    async findProduct(content: string): Promise<ProductListItem | null> {
        return this.products.find(item => item.content === content) ?? null;
    }

    async findProductId(content: string): Promise<string | null> {
        return this.products.find(item => item.content === content)?.id ?? null;
    }

    async removeProduct(content: string): Promise<boolean> {
        const product = await this.findProduct(content);

        if (!product) {
            return false;
        }

        const result = await super.remove(product.id);

        if (!result) {
            return false;
        }

        await this.appDriver.triggerProductRemoved(this, product.content, product.quantity);

        return true;
    }

    async getProductCategory(content: string): Promise<string | undefined> {
        const product = await this.findProduct(content);

        if (!product) {
            return undefined;
        }

        return product.category;
    }

    async setProductCategory(content: string, category?: string): Promise<boolean> {
        const product = await this.findProduct(content);

        if (!product) {
            return false;
        }

        return await this.set(product, 'category', category);
    }

    async getProductQuantity(content: string): Promise<number> {
        const product = await this.findProduct(content);

        if (!product) {
            return 0;
        }

        return product.quantity;
    }

    async setProductQuantity(content: string, quantity: number): Promise<boolean> {
        const product = await this.findProduct(content);

        if (!product) {
            return false;
        }

        const result = await this.set(product, 'quantity', quantity);

        if (!result) {
            return false;
        }

        await this.appDriver.triggerProductQuantityChanged(this, product.content, quantity);

        return true;
    }

}

export class GroceryListDriver extends ListDriver {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log('Grocery list driver has been initialized.');
    }

    async triggerProductCheckedAny(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductCheckedAny, list, {product, quantity}, {product, quantity});
    }

    async triggerProductChecked(list: ListDevice, product: string): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductChecked, list, {product});
    }

    async triggerProductCreated(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductCreated, list, {product, quantity}, {product, quantity});
    }

    async triggerProductQuantityChanged(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductQuantityChanged, list, {product, quantity}, {quantity});
    }

    async triggerProductRemoved(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductRemoved, list, {product, quantity}, {product, quantity});
    }

    async triggerProductUnchecked(list: ListDevice, product: string): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductUnchecked, list, {product});
    }

    async triggerProductUncheckedAny(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry.fireDeviceTrigger(Triggers.ProductUncheckedAny, list, {product, quantity}, {product, quantity});
    }

}
