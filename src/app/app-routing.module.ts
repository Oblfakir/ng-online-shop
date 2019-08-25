import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './constants/routes';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: AppRoutes.PRODUCT_LIST
	},
	{
		path: AppRoutes.PRODUCT_LIST,
		loadChildren: () => import('./pages/product-list-page/product-list-page.module').then(mod => mod.ProductListPageModule)
	},
	{
		path: `${AppRoutes.PDP}/:id`,
		loadChildren: () => import('./pages/product-display-page/product-display-page.module').then(mod => mod.ProductDisplayPageModule)
	},
	{
		path: AppRoutes.LOGIN,
		loadChildren: () => import('./pages/login-page/login-page.module').then(mod => mod.LoginPageModule)
	},
	{
		path: AppRoutes.ADD_PRODUCT,
		loadChildren: () => import('./pages/add-product-page/add-product-page.module').then(mod => mod.AddProductPageModule)
	},
	{
		path: AppRoutes.ERROR.ROOT,
		loadChildren: () => import('./pages/error-page/error-page.module').then(mod => mod.ErrorPageModule)
	},
	{
		path: '**',
		redirectTo: AppRoutes.ERROR.ROOT
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
