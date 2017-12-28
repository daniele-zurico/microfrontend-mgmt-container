import {AfterContentInit, AfterViewInit, ApplicationRef, Component, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {PageService} from '../../common/services/page.service';
import {IframeCmpstComponent} from '../../components-composite/iframe-cmpst/iframe-cmpst.component';
import {IPageProperties} from 'communication-channel';
import {MatSidenav} from '@angular/material';

@Component({
    moduleId: module.id.toString(),
    selector: 'mgmt-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})

export class WrapperComponent implements AfterViewInit {

    /**
     * display a spinner when the iframe is not ready
     */
    public isLoading: boolean;

    /**
     * show or hide the header
     */
    public showHeader = false;

    @ViewChild('iframeCmp')
    private iframeCmp: IframeCmpstComponent;

    @ViewChild('sidenav')
    private sidenav: MatSidenav;

    constructor(private router: Router,
                private pageService: PageService,
                private ref: ApplicationRef) {
        /* listen for event from the iframe */
        this.showHeader = false;
        this.pageService.pageChange.subscribe((page: IPageProperties) => {
            if (!page.authorized) {
                this.router.navigate([environment.loginPath]);
            }
            if (page.redirectToDefault) {
                this.router.navigate([environment.defaultPath]);
            }
            this.showHeader = page.showHeader;

            if (!page.showSidebar) {
                this.sidenav.close();
            } else if (page.showSidebar) {
                this.sidenav.open();
            }
            this.ref.tick();
        });

        this.onRouteChange();
    }

    ngAfterViewInit(): void {

    }

    /**
     * redirect to the right page
     */
    private onRouteChange() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.isLoading = true;
                    const url = event.url;
                    if (url === '' || url === '/' || url === '/app') {
                        this.router.navigate([environment.loginPath]);
                    }
                    this.iframeCmp.iframeUrl = url;
                    this.ref.tick();
                }
            });
    }
}
