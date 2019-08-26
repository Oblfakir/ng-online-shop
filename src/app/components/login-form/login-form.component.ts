import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
	public usernameFormControl: FormControl = new FormControl('');
    public passwordFormControl: FormControl = new FormControl('');
    public error: string;

	constructor(private loginService: LoginService, private modalService: ModalService) { }

	public handleSignInClick(): void {
        const { value: username } = this.usernameFormControl;
        const { value: password } = this.passwordFormControl;

        if (username && password) {
            this.loginService.login(username, password)
                .subscribe((result) => {
                    const { success } = result;

                    if (success) {
                        this.modalService.hideModalWindow();
                    } else {
                        this.error = 'Username or password is incorrect';
                    }
                });
        } else {
            this.error = 'Fields must be filled';
        }
	}
}
