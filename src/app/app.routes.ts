import {Routes} from '@angular/router';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        loadChildren: './containers/wrapper/wrapper.module#WrapperModule'
    },
    {
        path: '**',
        loadChildren: './containers/wrapper/wrapper.module#WrapperModule'
    }
];
