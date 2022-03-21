import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component-eliakin.html',
  styleUrls: ['./login-status.component-eliakin.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  userFullName: string;

  storage: Storage = sessionStorage;

  menuStatus: boolean = false;

  constructor(
    private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) {}

  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe((result) => {
      this.isAuthenticated = result.isAuthenticated;
      this.getUserDetails();
    });
  }

  getUserDetails() {
    if (this.isAuthenticated) {
      // Fetch the logged in user details
      //
      // user full name is exposed as a property name
      this.oktaAuth.getUser().then((res) => {
        this.userFullName = res.name;

        // retrieve the user's email from authentication response
        const userEmail = res.email;

        // store the email in browser storage
        this.storage.setItem('userEmail', JSON.stringify(userEmail));
      });
    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuth.signOut();
  }

  toggleUserMenu() {
    this.menuStatus = !this.menuStatus;
    console.log('USER MENU', this.menuStatus);
  }
}
