import { Component, OnInit, forwardRef } from "@angular/core";
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Filter } from 'src/app/models/filter';

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
export class ProductFilterComponent implements OnInit, ControlValueAccessor {
	public filterFormGroup: FormGroup;
	private _propagateChange: (_: any) => {};
	private _propagateTouched: (_: any) => {};

	constructor() {
		this.filterFormGroup = new FormGroup({
			query: new FormControl(),
			availableOnly: new FormControl(),
			category: new FormControl(),
			rating: new FormControl(),
			priceFrom: new FormControl(),
			priceTo: new FormControl()
		});
	}

	ngOnInit() {
		this.filterFormGroup.valueChanges.subscribe((filter: Filter) => {
			this._propagateChange(filter);
		});
	}

	writeValue(filter: Filter): void {
		this.filterFormGroup.setValue(filter);
	}

	registerOnChange(fn: any): void {
		this._propagateChange = fn;
	}

	registerOnTouched(fn: any): void {
		this._propagateTouched = fn;
	}
}
