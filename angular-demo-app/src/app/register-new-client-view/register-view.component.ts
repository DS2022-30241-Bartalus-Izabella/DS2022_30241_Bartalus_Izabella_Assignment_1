import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RoleEnum} from "../entities/RoleEnum";
import {AuthService} from "../services/AuthenticationService";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  signUpForm!: FormGroup;
  roles = RoleEnum;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      id: ['', {validators: [
          Validators.required
        ]}],
      firstName: ['', {validators: [
          Validators.required
        ]}],
      lastName: ['', {validators: [
          Validators.required
        ]}],
      username: ['', {validators: [
          Validators.required
        ]}],
      password: ['', {validators: [
          Validators.required
        ]}],
      role:['', {validators: [
          Validators.required
        ]}]
    })
  }
  get id(){
    return this.signUpForm?.get('id');
  }

  get firstName(){
    return this.signUpForm?.get('firstName');
  }

  get lastName(){
    return this.signUpForm?.get('lastName');
  }

  get username(){
    return this.signUpForm?.get('username');
  }

  get password(){
    return this.signUpForm?.get('password');
  }

  get role() {
    return this.signUpForm?.get('role');
  }

  register(){
    const user = {
      id: this.signUpForm?.value.id,
      firstName: this.signUpForm?.value.firstName,
      lastName: this.signUpForm?.value.lastName,
      username: this.signUpForm?.value.username,
      password: this.signUpForm?.value.password,
      role: this.signUpForm?.value.role,
    }
    this.authenticationService.register({id: user.id, firstName: user.firstName, lastName: user.lastName, username: user.username, password:user.password, roleType: user.role}).subscribe(x=> alert("User saved successfully!"));
    this.signUpForm.reset();
  }

  discardChanges(){
    this.signUpForm.reset();
  }

  logout(){
    this.authService.do_logout();
  }
}
