import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { UserPageGuard } from './user-page.guard';

const routes: Routes = [
	{
		path: '',
		component: UserPageComponent,
		canActivate: [UserPageGuard]
	}
];

@NgModule({
	declarations: [
		UserPageComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule
	],
	providers: [
		UserPageGuard
	]
})
export class UserPageModule { }
