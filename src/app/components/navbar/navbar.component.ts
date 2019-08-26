import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { ModalService } from 'src/app/services/modal.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @ViewChild('loginForm', {static: false}) private loginFormRef: TemplateRef<any>;

    constructor(private loginService: LoginService,
        private userInfoService: UserInfoService,
        private modalService: ModalService) { }

    public handleLoginClick(): void {
        this.modalService.showModalWindow(this.loginFormRef);
    }

	public get isUserLoggedIn(): Observable<boolean> {
		return this.loginService.isUserLoggedIn;
	}
}
