import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(private loginService: LoginService, private userInfoService: UserInfoService) { }

	ngOnInit() {
	}

	public isUserLoggedIn(): boolean {
		return this.loginService.isUserLoggedIn;
	}
}
