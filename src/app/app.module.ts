import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CheckoutComponent } from './pages/checkout-page/checkout/checkout.component';

@NgModule({
	declarations: [
		AppComponent,
		CheckoutComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		HttpClientModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
