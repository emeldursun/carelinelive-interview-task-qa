import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-forgotten-password',
    templateUrl: './forgotten-password.component.html',
    styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
    hasBeenSubmitted = false;

    forgottenPasswordForm = this.formBuilder.group({
        email: [null, [Validators.email, Validators.required]],
    });

    constructor(
        private readonly formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
    }

    submit() {
        this.hasBeenSubmitted = true;
    }
}
