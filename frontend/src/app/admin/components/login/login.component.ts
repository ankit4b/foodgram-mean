import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = true;

  userData = {
    username: '',
    password: '',
    conf_password: '',
  };

  registerUserData = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onLoginSubmit() {
    console.log('Login Formsubmitted : ', this.userData);
    // this.auth.login(this.userData.username, this.userData.password)

    this.apiService
      .login({
        username: this.userData.username,
        password: this.userData.password,
      })
      .subscribe(
        (res: any) => {
          // this.user = res;
          // console.log('this.user : ', this.user);
          localStorage.setItem('token', res.token);
          console.log('Login Successful');
          this.router.navigate(['cart-page']);
        },
        (err: any) => {
          console.log('Something went wrong', err);
          this.router.navigate(['/login']);
        }
      );
  }

  onSignupSubmit() {
    console.log('SIgnup Formsubmitted : ', this.userData);
    // this.auth.registration(this.userData.username, this.userData.password)

    this.apiService
      .register({
        name: this.registerUserData.name,
        email: this.registerUserData.email,
        password: this.registerUserData.password,
      })
      .subscribe(
        (res: any) => {
          // this.user = res;
          // console.log('this.user : ', this.user);
          localStorage.setItem('token', res.token);
          console.log('Login Successful');
          this.router.navigate(['cart-page']);
        },
        (err: any) => {
          console.log('Something went wrong', err);
          this.router.navigate(['/login']);
        }
      );
  }

  switchForm(form: string) {
    this.isLogin = form === 'signup' ? false : true;
  }
}
