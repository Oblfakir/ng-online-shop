import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Product } from 'src/app/models/product';

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
	@Input() public products: Product[] = [];
}
