import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/AuthenticationService";
import {Observable} from "rxjs";
import {Device} from "../entities/DeviceModel";
import {UserService} from "../services/UserService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-clients-devices-list',
  templateUrl: './clients-devices-list.component.html',
  styleUrls: ['./clients-devices-list.component.css']
})
export class ClientsDevicesListComponent implements OnInit {

  devices$: Observable<Device[]> | undefined;
  id: number | undefined;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.devices$ = this.userService.getDeviceListByUserId(this.id)
  }

  logout(){
    this.authService.do_logout();
  }
}
