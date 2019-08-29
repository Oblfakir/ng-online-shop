import { Product } from './product';

export class BasketItem {
    product: Product;
    quantity: number;
    subtotal: number;

    constructor(product: Product, quantity: number = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    public add(count: number = 1): void {
        this.quantity = this.quantity + count;
        this._calculateSubtotal();
    }

    public remove(count: number = 1): void {
        this.quantity = this.quantity - count;
        this._calculateSubtotal();
    }

    private _calculateSubtotal(): void {
        this.subtotal =  this.product.price * this.quantity;
    }
}