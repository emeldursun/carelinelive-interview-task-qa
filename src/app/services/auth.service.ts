import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';

const USERNAME = 'test@carelinelive.com';
const PASSWORD = 'password';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authenticated$ = new BehaviorSubject<boolean>(sessionStorage.getItem('authenticated') === 'true');
    username$ = new BehaviorSubject<string>(sessionStorage.getItem('username') || '');

    constructor() {
        this.authenticated$.next(sessionStorage.getItem('authenticated') === 'true');
        this.username$.next(sessionStorage.getItem('username') || '');
    }

    login(username: string, password: string): Observable<boolean> {
        let result = username === USERNAME && password === PASSWORD;

        return of(result).pipe(
            delay(500),
            tap(result => {
                sessionStorage.setItem('authenticated', result ? 'true' : 'false');
                if (result) {
                    sessionStorage.setItem('username', username);
                } else {
                    sessionStorage.removeItem('username');
                }
                this.username$.next(username);
                this.authenticated$.next(result);
            })
        );
    }

    logout(): void {
        sessionStorage.setItem('authenticated', 'false');
        sessionStorage.removeItem('username');
        this.authenticated$.next(false);
    }
}
