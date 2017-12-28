import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarModule} from '../../components-composite/navbar/navbar.module';
import {WrapperComponent} from './wrapper.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../app.shared.module';
import {SidenavModule} from '../../components-composite/sidenav/sidenav.module';
import {IframeCmpstModule} from '../../components-composite/iframe-cmpst/iframe-cmpst.module';
import {PageService} from '../../common/services/page.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        NavbarModule,
        SidenavModule,
        SharedModule,
        IframeCmpstModule,
        RouterModule.forChild([
            {
                path: '',
                component: WrapperComponent
            },
            {
                path: '**',
                component: WrapperComponent
            }
        ])
    ],
    declarations: [
        WrapperComponent
    ],
    providers: [
        PageService
    ]
})
export class WrapperModule {
}
