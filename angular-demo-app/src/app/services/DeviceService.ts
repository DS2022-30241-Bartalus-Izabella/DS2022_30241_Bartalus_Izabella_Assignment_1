import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Device} from "../entities/DeviceModel";

@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  private baseUrl = "http://localhost:8081";

  constructor( private httpService: HttpClient){
  }

  addDevice(device: Device): Observable<Device> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')|| "");
    const headers = { headers: header };
    return this.httpService.post<Device>(`${this.baseUrl}/devices`, device, headers);
  }

  getDevices(): Observable<Device[]> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.get<Device[]>(`${this.baseUrl}/devices`, headers);
  }

  getDeviceById(id: number | null): Observable<Device>{
    return this.httpService.get<Device>(`${this.baseUrl}/devices/${id}`);
  }

  deleteDevice(id: number | null){
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.delete(`${this.baseUrl}/devices/${id}`, headers);
  }

  editDevice(device: Device, id: number): Observable<Device>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.put<Device>(`${this.baseUrl}/devices/${id}`, device, headers);
  }
}
