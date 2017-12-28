import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {SharedModule} from '../../app.shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ]
})
export class SidenavModule {
}
