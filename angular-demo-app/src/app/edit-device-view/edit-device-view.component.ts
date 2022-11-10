import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeviceService} from "../services/DeviceService";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/AuthenticationService";

@Component({
  selector: 'app-edit-device-view',
  templateUrl: './edit-device-view.component.html',
  styleUrls: ['./edit-device-view.component.css']
})
export class EditDeviceViewComponent implements OnInit {

  editFormForDevices!: FormGroup;
  id: number | undefined;

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private router: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.editFormForDevices = this.fb.group({
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

  get description(){
    return this.editFormForDevices?.get('description');
  }

  get address(){
    return this.editFormForDevices?.get('address');
  }

  get maxHourlyEnergyConsumption(){
    return this.editFormForDevices?.get('maxHourlyEnergyConsumption');
  }

  editDevice(){
    this.id = this.router.snapshot.params['id'];

    const device = {
      description: this.editFormForDevices?.value.description,
      address: this.editFormForDevices?.value.address,
      maxHourlyEnergyConsumption: this.editFormForDevices?.value.maxHourlyEnergyConsumption
    }
    if(this.id !== undefined){
      this.deviceService.editDevice({id: this.id, description: device.description, address: device.address, maxHourlyEnergyConsumption: device.maxHourlyEnergyConsumption}, this.id).subscribe(x => alert("Device edited successfully!"));
      this.editFormForDevices.reset();
    }
  }

  discardChanges(){
    this.editFormForDevices.reset();
  }

  logout(){
    this.authService.do_logout();
  }
}
