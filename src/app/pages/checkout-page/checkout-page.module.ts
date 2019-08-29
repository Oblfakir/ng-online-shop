import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutPageGuard } from './checkout-page.guard';

const routes: Routes = [
    {
        path: '',
        component: CheckoutComponent,
        canActivate: [CheckoutPageGuard]
    }
]

@NgModule({
	declarations: [],
	imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CheckoutPageGuard
    ]
})
export class CheckoutPageModule {}
