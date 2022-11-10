import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginViewComponent} from "./login-view/login-view.component";
import {AdminHomePageViewComponent} from "./admin-home-page-view/admin-home-page-view.component";
import {ClientsListViewComponent} from "./clients-list-view/clients-list-view.component";
import {RegisterViewComponent} from "./register-new-client-view/register-view.component";
import {RegisterNewDeviceComponent} from "./add-new-device/register-new-device.component";
import {DevicesListViewComponent} from "./devices-list-view/devices-list-view.component";
import {ClientsDevicesListComponent} from "./clients-devices-list/clients-devices-list.component";
import {EditUserViewComponent} from "./edit-user-view/edit-user-view.component";
import {EditDeviceViewComponent} from "./edit-device-view/edit-device-view.component";
import {AuthenticationGuard} from "./authenticationGuard/AuthenticationGuard";

const routes: Routes = [
  {
    path: '', canActivate: [AuthenticationGuard], children:
      [
        {
          path: 'admin-home-page',
          component: AdminHomePageViewComponent
        },
        {
          path: 'clients',
          component: ClientsListViewComponent
        },
        {
          path: 'register',
          component: RegisterViewComponent
        },
        {
          path: 'devices',
          component: DevicesListViewComponent
        },
        {
          path: 'register-device',
          component: RegisterNewDeviceComponent
        },
        {
          path: 'edit-user/:id',
          component: EditUserViewComponent
        },
        {
          path: 'edit-device/:id',
          component: EditDeviceViewComponent
        }
      ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginViewComponent,
    // pathMatch: 'full'
  },
  {
    path: 'my-devices',
    component: ClientsDevicesListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
