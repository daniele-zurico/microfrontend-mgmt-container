import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAIN_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {AuthService} from './common/services/auth.service';
import {ApplicationService} from './common/services/application.service';
import {StoreModule} from '@ngrx/store';
import {navigationReducer} from './common/reducers/navigationReducer';
import {initialState} from './common/interfaces/IAppState';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        noTokenScheme: true,
        headerName: 'Authorization',
        tokenName: 'token',
        tokenGetter: (() => localStorage.getItem('token'))
    }), http, options);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(MAIN_ROUTES, {useHash: true}),
        StoreModule.forRoot(<any>{app: navigationReducer}, {initialState}),
    ],
    providers: [
        ApplicationService,
        AuthService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
