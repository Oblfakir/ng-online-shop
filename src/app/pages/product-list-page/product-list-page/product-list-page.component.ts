import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/product-list.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: "app-product-list-page",
	templateUrl: "./product-list-page.component.html",
	styleUrls: ["./product-list-page.component.scss"]
})
export class ProductListPageComponent implements OnInit, OnDestroy {
	public products: Product[];
	private _unsubscribe: Subject<boolean> = new Subject<boolean>();
	constructor(private productListService: ProductListService) {}

	ngOnInit() {
		this.productListService.products
			.pipe(takeUntil(this._unsubscribe))
			.subscribe((products: Product[]) => {
				this.products = products;
			});
		this.productListService.fetchProducts();
	}

	ngOnDestroy(): void {
		this._unsubscribe.next(true);
	}
}
