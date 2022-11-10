import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RoleEnum} from "../entities/RoleEnum";
import {UserService} from "../services/UserService";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/AuthenticationService";

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.css']
})
export class EditUserViewComponent implements OnInit {

  editUserForm!: FormGroup;
  id?: number;
  roles = RoleEnum;

  constructor(private router: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
              private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
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
      roleType: ['', {validators: [
          Validators.required
        ]}],
    })
  }

  get firstName(){
    return this.editUserForm?.get('firstName');
  }

  get lastName(){
    return this.editUserForm?.get('lastName');
  }

  get username(){
    return this.editUserForm?.get('username');
  }

  get password(){
    return this.editUserForm?.get('password');
  }

  get roleType(){
    return this.editUserForm?.get('roleType');
  }

  editUser(){
    this.id = this.router.snapshot.params['id'];

    const user = {
      firstName: this.editUserForm?.value.firstName,
      lastName: this.editUserForm?.value.lastName,
      username: this.editUserForm?.value.username,
      password: this.editUserForm?.value.password,
      roleType: this.editUserForm?.value.roleType,
    }
    if(this.id !== undefined){
      this.userService.editClient({id: this.id, firstName: user.firstName, lastName: user.lastName, username: user.username, password: user.password, roleType:user.roleType }, this.id).subscribe(x => alert("User edited successfully!"));
      this.editUserForm.reset();
    }
  }

  discardChanges(){
    this.editUserForm.reset();
  }

  logout(){
    this.authService.do_logout();
  }
}
