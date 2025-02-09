import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.css'
})
export class SignupLoginComponent {
  isLogin: boolean = true; // Set the default form to be the Login form

  toggleForm() {
    this.isLogin = !this.isLogin; // Toggle between login and signup
  }
}
