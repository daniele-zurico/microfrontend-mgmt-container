import {AfterViewInit, ApplicationRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from '../../common/services/user.service';
import CommunicationChannel from 'communication-channel';
import {PageService} from '../../common/services/page.service';
import {ApplicationService} from '../../common/services/application.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
    selector: 'mgmt-iframe-cmpst',
    templateUrl: './iframe-cmpst.component.html',
    styleUrls: ['./iframe-cmpst.component.scss']
})
export class IframeCmpstComponent implements AfterViewInit {

    @Input()
    public header: boolean;

    @Output()
    public loaded: EventEmitter<boolean> = new EventEmitter();

    public url: SafeResourceUrl;

    constructor(private userService: UserService,
                private pageService: PageService,
                private applicationService: ApplicationService,
                private ref: ApplicationRef,
                private domSanitizer: DomSanitizer) {
    }

    /**
     * Set the url
     * @param {string} url
     */
    public set iframeUrl(url: string) {
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.applicationService.buildIframeUrl(url));
        this.loaded.emit(true);
    }

    ngAfterViewInit(): void {
        CommunicationChannel.registerServices({
            userService: this.userService,
            pageService: this.pageService,
        }, document.querySelector('iframe').contentWindow);
    }

}

