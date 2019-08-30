import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { delay } from 'rxjs/operators';

const mockProductFactory = (id) => {
	return new Product({
		price: 10 * id,
		name: 'Sample product ' + id,
		id,
		image: '/assets/images/product.png',
		rating: 4,
		category: id % 2 === 0 ? 'Category 1' : 'Category 2',
	});
}

const productsMock = of([
	mockProductFactory(10),
	mockProductFactory(2),
	mockProductFactory(8),
	mockProductFactory(4),
	mockProductFactory(5),
	mockProductFactory(6),
	mockProductFactory(1),
	mockProductFactory(9),
	mockProductFactory(3),
	mockProductFactory(7),
]).pipe(delay(1000));

@Injectable({
	providedIn: 'root'
})
export class ProductListService {
	private _products: BehaviorSubject<Product[]>;
	private _isProductsLoading: BehaviorSubject<boolean>;

	constructor() {
		this._products =  new BehaviorSubject<Product[]>([]);
		this._isProductsLoading = new BehaviorSubject<boolean>(false);
	}

	public get isProductsLoading(): Observable<boolean> {
		return this._isProductsLoading.asObservable();
	}

	public get products(): Observable<Product[]> {
		return this._products.asObservable();
	}

	public fetchProducts(): void {
		this._isProductsLoading.next(true);

		productsMock.subscribe((products: Product[]) => {
			this._products.next(products);
			this._isProductsLoading.next(false);
		})
	}
}
