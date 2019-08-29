import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ModalComponent } from './modal/modal.component';
import { BasketComponent } from './basket/basket.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
	declarations: [
		NavbarComponent,
		FooterComponent,
		LoginFormComponent,
		ProductComponent,
		ProductListComponent,
		ModalComponent,
		BasketComponent,
		RatingComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		LoginFormComponent,
		ProductComponent,
		ProductListComponent,
		ModalComponent
	]
})
export class ComponentsModule { }
