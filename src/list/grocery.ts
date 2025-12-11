import { Triggers } from '../flow';
import { ListDevice, ListDriver } from './base';
import type { ProductListItem } from './item';

export class GroceryListDevice extends ListDevice<GroceryListDriver> {

    get products(): ProductListItem[] {
        return this.items.filter(item => item.type === 'product');
    }

    async onInit(): Promise<void> {
        await super.onInit();

        this.log(`Grocery list "${this.getName()}" has been initialized.`);
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

    async addProduct(content: string, quantity: number = 1): Promise<void> {
        await this.add<ProductListItem>({
            type: 'product',
            checked: false,
            content,
            quantity
        });

        await this.appDriver.triggerProductCreated(this, content, quantity);
    }

    async findProduct(content: string): Promise<ProductListItem | null> {
        return this.products.find(item => item.content === content) ?? null;
    }

    async findProductId(content: string): Promise<string | null> {
        return this.products.find(item => item.content === content)?.id ?? null;
    }

    async removeProduct(content: string): Promise<boolean> {
        const product = await this.findByContent(content);

        if (!product || product.type !== 'product') {
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
        const product = await this.findByContent(content);

        if (!product || product.type !== 'product') {
            return undefined;
        }

        return product.category;
    }

    async getProductQuantity(content: string): Promise<number> {
        const product = await this.findByContent(content);

        if (!product || product.type !== 'product') {
            return 0;
        }

        return product.quantity;
    }

    async setProductCategory(content: string, category?: string): Promise<boolean> {
        const product = await this.findByContent(content);

        if (!product || product.type !== 'product') {
            return false;
        }

        return await this.set(product, 'category', category);
    }

    async setProductQuantity(content: string, quantity: number): Promise<boolean> {
        const product = await this.findByContent(content);

        if (!product || product.type !== 'product') {
            return false;
        }

        return await this.set(product, 'quantity', quantity);
    }

}

export class GroceryListDriver extends ListDriver {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log('Grocery list driver has been initialized.');
    }

    async triggerProductCheckedAny(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductCheckedAny)
            ?.trigger(list, {product, quantity}, {product, quantity});
    }

    async triggerProductChecked(list: ListDevice, product: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductChecked)
            ?.trigger(list, {product});
    }

    async triggerProductCreated(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductCreated)
            ?.trigger(list, {product, quantity}, {product, quantity});
    }

    async triggerProductQuantityChanged(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductQuantityChanged)
            ?.trigger(list, {product, quantity}, {quantity});
    }

    async triggerProductRemoved(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductRemoved)
            ?.trigger(list, {product, quantity}, {product, quantity});
    }

    async triggerProductUnchecked(list: ListDevice, product: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductUnchecked)
            ?.trigger(list, {product});
    }

    async triggerProductUncheckedAny(list: ListDevice, product: string, quantity: number): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.ProductUncheckedAny)
            ?.trigger(list, {product, quantity}, {product, quantity});
    }

}
