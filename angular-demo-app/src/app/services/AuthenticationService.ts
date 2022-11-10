import {Injectable} from "@angular/core";
import {User} from "../entities/UserModel";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {UserCredentials} from "../entities/UserCredentials";
import {JwtToken} from "../entities/JwtToken";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = "http://localhost:8081";

  redirectUrl: string | undefined;

  constructor(private httpService: HttpClient, private router: Router) { }

  login(credentials: UserCredentials): Observable<JwtToken> {
    return this.httpService.post<JwtToken>(`${this.baseUrl}/api/login`, credentials).pipe(tap((jwt) => {
      localStorage.setItem("jwtToken", jwt.accessToken);
      localStorage.setItem("userRole",jwt.roleType);
    }));
  }

  register(user: User): Observable<User>{
    return this.httpService.post<User>(`${this.baseUrl}/api/register`, user);
  }

  isAdmin() : boolean
  {
    return localStorage.getItem("userRole") === "Admin";
  }

  isClient() : boolean
  {
    return localStorage.getItem("userRole") === "Client";
  }

  do_logout(){
    localStorage.removeItem("userRole");
    localStorage.removeItem("jwtToken");
  }

}

