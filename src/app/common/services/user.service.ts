import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {

    private _token: string;

    constructor(private authService: AuthService) {
    }

    /**
     * set the user token and redirect to the default path
     *
     * @param {string} token
     * @returns {any}
     */
    public setToken(token: string): any {
        this._token = token;
        this.authService.login(token);
    }

    /**
     * Get the user token
     * @returns {any}
     */
    public getToken(): any {
        return this.authService.userToken();
    }

}
