import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Product } from "../models/product";
import { ProductListService } from "./product-list.service";
import { Filter } from "../models/filter";

@Injectable({
	providedIn: "root"
})
export class FilterService {
	private _filteredProducts: Observable<Product[]>;
	private _filter: BehaviorSubject<Filter>;

	constructor(private productListService: ProductListService) {
		this._filter = new BehaviorSubject<Filter>(new Filter());
		this._filteredProducts = combineLatest(
			this.productListService.products,
			this._filter
		).pipe(
			map(([products, filter]) => products.filter(product => product.checkWithFilter(filter)))
		);
	}

	public setFilter(filter: Filter) {
		this._filter.next(filter);
	}

	public get filteredProducts(): Observable<Product[]> {
		return this._filteredProducts;
	}
}
