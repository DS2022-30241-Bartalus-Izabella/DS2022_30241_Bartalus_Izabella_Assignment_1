import {Component, OnChanges, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../entities/UserModel";
import {UserService} from "../services/UserService";
import {DeviceService} from "../services/DeviceService";
import {Device} from "../entities/DeviceModel";
import {AuthService} from "../services/AuthenticationService";

@Component({
  selector: 'app-devices-list-view',
  templateUrl: './devices-list-view.component.html',
  styleUrls: ['./devices-list-view.component.css']
})
export class DevicesListViewComponent implements OnInit {

  devices$: Observable<Device[]> | undefined;

  constructor(
    private deviceService: DeviceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.devices$ = this.deviceService.getDevices();
  }

  deleteDevice(id: number) {
    if(id){
      this.deviceService.deleteDevice(id).subscribe(del => alert("Device deleted successfully!"));
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  logout(){
    this.authService.do_logout();
  }
}
