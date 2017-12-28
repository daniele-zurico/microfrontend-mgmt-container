import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'iag-mgmt-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    public users = [
        {
            name: 'Users',
            url: '/app/user/users',
            icon: 'contacts'
        }
    ];

    public aircraft_def = [
        {
            name: 'Airlines',
            url: '/app/aircraft-def/airlines',
            icon: 'flight_takeoff'
        },
        {
            name: 'Suppliers',
            url: '/app/aircraft-def/suppliers',
            icon: 'settings_input_components'
        },
        {
            name: 'Platform Definitions',
            url: '/app/aircraft-def/platform-definitions',
            icon: 'assignment'
        },
        {
            name: 'Aircraft Configurations',
            url: '/app/aircraft-def/aircraft-configurations',
            icon: 'settings'
        }
    ];

    // public catalogues = [
    //     {
    //         name: 'Shopping',
    //         url: '/app/catalogue/test',
    //         icon: 'shopping_basket'
    //     },
    //     {
    //         name: 'Wifi',
    //         url: '/app/catalogue/test',
    //         icon: 'network_wifi'
    //     }
    // ];

    constructor(private router: Router) {
    }

    public navigateTo(url): void {
        this.router.navigate([url]);
    }
}
