import {Injectable} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApplicationService {

    constructor() {
    }

    /**
     * build the url
     *
     * @returns {string}
     */
    public buildIframeUrl(url: string): string {
        const urlSplitter = url.split('/');
        return `${this.discoverAppUri(urlSplitter[2])}/#/${urlSplitter[3]}`;
    }

    /**
     * Discover the environment app value given the key
     *
     * @example: passing as appName user it return http://localhost:4201
     * @param {string} app
     * @returns {string}
     */
    private discoverAppUri(appName: string): string {
        return environment[appName];
    }


}


