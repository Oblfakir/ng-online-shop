import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
	declarations: [NavbarComponent, FooterComponent, LoginFormComponent, ProductComponent, ProductListComponent],
	imports: [
		CommonModule
	]
})
export class ComponentsModule { }
