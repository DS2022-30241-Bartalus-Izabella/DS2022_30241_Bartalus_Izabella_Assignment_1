import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthenticationService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-home-page-view',
  templateUrl: './admin-home-page-view.component.html',
  styleUrls: ['./admin-home-page-view.component.css']
})
export class AdminHomePageViewComponent implements OnInit {

  mapForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) { }


  ngOnInit(): void {
    this.mapForm = this.fb.group({
      clientId: ['', {validators: [
          Validators.required
        ]}],
      deviceId: ['', {validators: [
          Validators.required
        ]}]
    })
  }

  get clientId(){
    return this.mapForm?.get('clientId');
  }

  get deviceId(){
    return this.mapForm?.get('deviceId');
  }

  discardChanges(){
    setTimeout(() => {
      window.location.reload();
    })
  }

  logout(){
    this.authService.do_logout();
  }

  mapDeviceToAUser(){
    const clientDevice = {
      clientId: this.mapForm?.value.clientId,
      deviceId: this.mapForm?.value.deviceId,
    }
    this.userService.mapDeviceToClient(clientDevice.clientId, clientDevice.deviceId).subscribe(()=>alert("Device was mapped to user successfully!") ,
      () => alert("Something went wrong! Please retry."));
    this.mapForm.reset();
    }

}
