import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent
	}
];

@NgModule({
	declarations: [
		LoginPageComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ComponentsModule
	],
	exports: [
		RouterModule
	]
})
export class LoginPageModule { }
