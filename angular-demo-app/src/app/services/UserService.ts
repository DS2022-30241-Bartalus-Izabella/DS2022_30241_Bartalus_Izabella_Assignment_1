import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {User} from "../entities/UserModel";
import {UserDeviceMapping} from "../entities/UserDeviceMapping";
import {Device} from "../entities/DeviceModel";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = "http://localhost:8081";

  constructor( private httpService: HttpClient){
  }

  getClients(): Observable<User[]> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.get<User[]>(`${this.baseUrl}/users`, headers);
  }

  getClientById(id: number | null): Observable<User>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.get<User>(`${this.baseUrl}/users/${id}`, headers);
  }

  deleteClient(id: number | null){
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.delete(`${this.baseUrl}/users/${id}`,headers);
  }

  editClient(user: User, id: number): Observable<User>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.put<User>(`${this.baseUrl}/users/${id}`, user, headers);
  }

  mapDeviceToClient(clientId: number, deviceId: number){
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.post<UserDeviceMapping>(`${this.baseUrl}/users?clientId=${clientId}&deviceId=${deviceId}`,{ clientId, deviceId }, headers);
  }

  getDeviceListByUserId(id: number | undefined){
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken') || "");
    const headers = { headers: header };
    return this.httpService.get<Device[]>(`${this.baseUrl}/users/devices/${id}`, headers);
  }
}
