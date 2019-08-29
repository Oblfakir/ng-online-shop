import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
    @Input() public product: Product;

    constructor(private basketService: BasketService, private router: Router) {}
    
    public handleDetailedInfoClick(): void {

    }

    public handleAddToBasketClick(): void {

    }
}
