import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductListPageComponent } from './product-list-page/product-list-page.component';

const routes: Routes = [
	{
		path: '',
		component: ProductListPageComponent
	}
];

@NgModule({
	declarations: [
		ProductListPageComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	exports: [
		RouterModule
	]
})
export class ProductListPageModule { }
