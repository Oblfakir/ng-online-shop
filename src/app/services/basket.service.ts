import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { BehaviorSubject, Observable } from "rxjs";
import { BasketItem } from "../models/basket-item";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class BasketService {
	private _products: BehaviorSubject<BasketItem[]>;

	constructor() {
		this._products = new BehaviorSubject<BasketItem[]>([]);
	}

	public get products(): Observable<Product[]> {
		return this._products.pipe(
			map(x => x.map(i => i.product))
		);
	}

	public get total(): Observable<number> {
		return this._products.pipe(
			map(x => x.map(i => i.product.price).reduce((res, i) => res + i, 0))
		);
	}

	public get productCount(): Observable<number> {
		return this._products.pipe(map((items: BasketItem[]) => items.length));
	}

	public addProduct(product: Product, count: number = 1): void {
		const products = this._products.getValue();
		const basketProduct = products.find(x => x.product.id === product.id);

		if (basketProduct) {
			basketProduct.add(count);
			this._products.next(products);
		} else {
			this._products.next([...products, new BasketItem(product, count)]);
		}
	}
}
