import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {JwtHelper, AuthHttp} from 'angular2-jwt';

@Injectable()
export class AuthService {
    private jwt: JwtHelper = new JwtHelper();

    constructor() {
    }

    /**
     * return the token for the current user
     *
     * @returns {boolean} True if logged in
     */
    public isLoggedIn(): boolean {
        const token = localStorage.getItem('token');
        if (token === null) {
            return false;
        }
        return token && !this.jwt.isTokenExpired(token);
    }

    /**
     * logout the current logged in user
     */
    public logout(): void {
        localStorage.removeItem('token');
    }

    /**
     * return the usertoken if it's still valid
     *
     * @returns {string}
     */
    public userToken(): string {
        if (this.isLoggedIn()) {
            return localStorage.getItem('token');
        } else {
            return null;
        }
    }

    /**
     * store the token on login
     *
     * @param {string} token
     */
    public login(token: string): void {
        localStorage.setItem('token', token);
    }

}
