import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ComponentsModule } from 'src/app/components/components.module';

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
		CommonModule,
		ComponentsModule,
		ReactiveFormsModule
	],
	exports: [
		RouterModule
	]
})
export class ProductListPageModule { }
