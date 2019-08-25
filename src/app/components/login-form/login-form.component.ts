import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	public usernameFormControl: FormControl = new FormControl('');
	public passwordFormControl: FormControl = new FormControl('');

	constructor() { }

	ngOnInit() {
	}

	public handleSignInClick(): void {

	}
}
