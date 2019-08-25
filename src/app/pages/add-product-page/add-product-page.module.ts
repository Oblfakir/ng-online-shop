import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { AddProductGuard } from './add-product.guard';

const routes: Routes = [
	{
		path: '',
		component: AddProductComponent,
		canActivate: [ AddProductGuard ]
	}
];

@NgModule({
	declarations: [
		AddProductComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	exports: [
		RouterModule
	],
	providers: [
		AddProductGuard
	]
})
export class AddProductPageModule { }
