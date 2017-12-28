import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatProgressSpinnerModule
    ]
})
export class SharedModule {

}