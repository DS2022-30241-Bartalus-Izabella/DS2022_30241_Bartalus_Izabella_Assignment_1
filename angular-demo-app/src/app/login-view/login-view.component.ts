import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/AuthenticationService";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  loginForm: FormGroup | any;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', {validators: [
          Validators.required
        ]}],
      password: ['',{validators: [
          Validators.required
        ]}]
    })
  }

  get username(){
    return this.loginForm?.get('username');
  }

  get password(){
    return this.loginForm?.get('password');
  }

  login() {
    const user = {
      username: this.loginForm?.value.username,
      password: this.loginForm?.value.password
    }
    this.authenticationService.login(user)
      .subscribe(() => {
      this.router.navigateByUrl("/admin-home-page");
    },
    () => {
      alert("Login unsuccessful! Please Retry!");
      this.loginForm.reset();
    });
  }


  //}

}
