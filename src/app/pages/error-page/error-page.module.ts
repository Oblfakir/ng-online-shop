import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';

const routes: Routes = [
	{
		path: '403',
		component: ForbiddenComponent
	},
	{
		path: '404',
		component: NotFoundComponent
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	declarations: [
		NotFoundComponent,
		ForbiddenComponent,
		CustomErrorComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	exports: [
		RouterModule
	]
})
export class ErrorPageModule { }
