import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/product-list.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterService } from 'src/app/services/filter.service';
import { FormControl } from '@angular/forms';
import { Filter } from 'src/app/models/filter';

@Component({
	selector: "app-product-list-page",
	templateUrl: "./product-list-page.component.html",
	styleUrls: ["./product-list-page.component.scss"]
})
export class ProductListPageComponent implements OnInit, OnDestroy {
	public products: Product[];
	public filterFormControl: FormControl;
	private _unsubscribe: Subject<boolean> = new Subject<boolean>();

	constructor(private productListService: ProductListService,
				private filterService: FilterService) {
		this.filterFormControl = new FormControl(new Filter());				
	}

	ngOnInit() {
		this.filterService.filteredProducts
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
