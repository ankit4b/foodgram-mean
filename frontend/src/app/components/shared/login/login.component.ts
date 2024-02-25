import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin:boolean = true;

  userData = {
    username: '',
    password: '',
    conf_password: ''
  };

   constructor(private auth: AuthService){}

  onLoginSubmit(){
    console.log("Login Formsubmitted : ",this.userData)
    this.auth.login(this.userData.username, this.userData.password)
  }

  onSignupSubmit(){
    console.log("SIgnup Formsubmitted : ",this.userData)
    this.auth.registration(this.userData.username, this.userData.password)
  }

  switchForm(form:string){
    this.isLogin = form === 'signup' ? false : true;
  }

  signInWithGoogle(){
    this.auth.signInWithGoogle();
  }
}
