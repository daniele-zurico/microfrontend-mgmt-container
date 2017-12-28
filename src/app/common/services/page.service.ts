import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface IPageProperties {
    showHeader: boolean;
    showSidebar: boolean;
    redirectTo?: string;
}

@Injectable()
export class PageService {

    public pageChange: Subject<any> = new Subject();
    private _pageProperties: IPageProperties;

    constructor() {
    }

    public setProperties(pageProperties: IPageProperties): any {
        this._pageProperties = pageProperties;
        this.pageChange.next(pageProperties);
    }

    public getProperties(): any {
        return this._pageProperties;
    }

}
