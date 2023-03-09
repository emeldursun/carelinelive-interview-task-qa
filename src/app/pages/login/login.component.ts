import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, shareReplay, startWith, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

type LoginRequest = { email: string; password: string };

export interface RequestState<T> {
    loading: boolean;
    data?: T;
    error?: any;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
    });

    loginRequest$ = new BehaviorSubject<LoginRequest | null>(null);

    login$: Observable<RequestState<boolean>> = this.loginRequest$.pipe(
        filter((value): value is LoginRequest => !!value),
        switchMap(value => this.authService.login(value.email, value.password).pipe(
            map(result => result ? { loading: false, data: true } : { loading: false, error: 'Invalid credentials' }),
            startWith({ loading: true }),
        )),
        shareReplay(1),
    );

    loggingIn$ = this.login$.pipe(map(state => state.loading));

    constructor(
        private readonly authService: AuthService,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly _snackBar: MatSnackBar,
    ) {
    }

    ngOnInit(): void {
        this.login$.subscribe(state => {
            if (state.data) {
                this._snackBar.open('Logged in', 'Dismiss', { duration: 3000 });
                this.router.navigate(['/']);
            } else if (state.error) {
                this._snackBar.open(state.error, 'Dismiss', { duration: 3000 });
            }
        });
    }
}
