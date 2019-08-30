import { Component, forwardRef } from "@angular/core";
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Filter } from 'src/app/models/filter';
import { Subscription } from 'rxjs';
import { ProductListService } from 'src/app/services/product-list.service';
import { map } from 'rxjs/operators';

@Component({
	selector: "app-product-filter",
	templateUrl: "./product-filter.component.html",
	styleUrls: ["./product-filter.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ProductFilterComponent),
			multi: true
		}
	]
})
export class ProductFilterComponent implements ControlValueAccessor {
	public filterFormGroup: FormGroup;
	public categories: string[] = [];
	private _propagateChange: (_: any) => {};
	private _propagateTouched: (_: any) => {};
	private _subscriptions: Subscription[] = [];

	constructor(private productListService: ProductListService) {
		this.filterFormGroup = new FormGroup({
			query: new FormControl(),
			availableOnly: new FormControl(),
			category: new FormControl(),
			rating: new FormControl(),
			priceFrom: new FormControl(),
			priceTo: new FormControl()
		});
	}

	writeValue(filter: Filter): void {
		this.filterFormGroup.setValue(filter);

		if (!this._subscriptions.length) {
			const subscription1 = this.filterFormGroup.valueChanges
				.pipe(
					map((filter: Filter) => {
						if (filter.category === 'any') {
							filter.category = null;
						}
						if (filter.rating === 0) {
							filter.rating = null;
						}
						return filter;
					})
				)
				.subscribe((filter: Filter) => {
					this._propagateChange(filter);
				});
			
			const subscription2 = this.productListService.categoriesList
				.subscribe(categories => this.categories = categories)

			this._subscriptions.push(subscription1);
			this._subscriptions.push(subscription2);
		}
	}

	registerOnChange(fn: any): void {
		this._propagateChange = fn;
	}

	registerOnTouched(fn: any): void {
		this._propagateTouched = fn;
	}
}
