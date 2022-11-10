import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeviceService} from "../services/DeviceService";
import {AuthService} from "../services/AuthenticationService";

@Component({
  selector: 'app-register-new-device',
  templateUrl: './register-new-device.component.html',
  styleUrls: ['./register-new-device.component.css']
})
export class RegisterNewDeviceComponent implements OnInit {

  signUpFormForDevices!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signUpFormForDevices = this.fb.group({
      id: ['', {validators: [
          Validators.required
        ]}],
      description: ['', {validators: [
          Validators.required
        ]}],
      address: ['', {validators: [
          Validators.required
        ]}],
      maxHourlyEnergyConsumption: ['', {validators: [
          Validators.required
        ]}],
    })
  }

  get id(){
    return this.signUpFormForDevices?.get('id');
  }

  get description(){
    return this.signUpFormForDevices?.get('description');
  }

  get address(){
    return this.signUpFormForDevices?.get('address');
  }

  get maxHourlyEnergyConsumption(){
    return this.signUpFormForDevices?.get('maxHourlyEnergyConsumption');
  }

  createDevice(){
    const device = {
      id: this.signUpFormForDevices?.value.id,
      description: this.signUpFormForDevices?.value.description,
      address: this.signUpFormForDevices?.value.address,
      maxHourlyEnergyConsumption: this.signUpFormForDevices?.value.maxHourlyEnergyConsumption
    }
    this.deviceService.addDevice({id: device.id, description: device.description, address: device.address, maxHourlyEnergyConsumption: device.maxHourlyEnergyConsumption}).subscribe(x => alert("Device created successfully!"));
    this.signUpFormForDevices.reset();
  }

  discardChanges(){
    this.signUpFormForDevices.reset();
  }

  logout(){
    this.authService.do_logout();
  }
}
