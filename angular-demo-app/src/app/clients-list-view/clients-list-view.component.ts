import {Component} from '@angular/core';
import {User} from "../entities/UserModel";
import {Observable} from "rxjs";
import {UserService} from "../services/UserService";
import {AuthService} from "../services/AuthenticationService";

@Component({
  selector: 'app-clients-list-view',
  templateUrl: './clients-list-view.component.html',
  styleUrls: ['./clients-list-view.component.css']
})

export class ClientsListViewComponent {

  clients$: Observable<User[]> | undefined;

  constructor(
    private clientService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.getClients();
  }

  deleteUser(id: number) {
    if(id){
      this.clientService.deleteClient(id).subscribe(del => alert("User deleted successfully!"));
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  logout(){
    this.authService.do_logout();
  }
}
