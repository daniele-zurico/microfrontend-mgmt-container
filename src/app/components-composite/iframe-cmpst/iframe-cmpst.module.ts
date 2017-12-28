import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IframeCmpstComponent} from './iframe-cmpst.component';
import {UserService} from '../../common/services/user.service';
import {PageService} from '../../common/services/page.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        IframeCmpstComponent
    ],
    exports: [
        IframeCmpstComponent
    ],
    providers: [UserService, PageService]
})
export class IframeCmpstModule {
}
