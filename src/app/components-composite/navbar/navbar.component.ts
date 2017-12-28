import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../common/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'iag-mgmt-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    @Output()
    public onBurgerClick: EventEmitter<any> = new EventEmitter();

    constructor(private authService: AuthService, private router: Router) {
    }

    /**
     * Logout the current logged in user
     */
    public logoutUser(): void {
        this.authService.logout();
        this.router.navigate(['/app/user/login']);
    }

    /**
     * Navigate to user details
     */
    public userDetails(): void {
        this.router.navigate(['/app/user/user-details']);
    }

    public goToHome(): void {
        this.router.navigate(['/app/user/user-details']);
    }

}
