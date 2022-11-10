import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterViewComponent } from './register-new-client-view/register-view.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdminHomePageViewComponent } from './admin-home-page-view/admin-home-page-view.component';
import { ClientsListViewComponent } from './clients-list-view/clients-list-view.component';
import {MatTableModule} from "@angular/material/table";
import { DevicesListViewComponent } from './devices-list-view/devices-list-view.component';
import { RegisterNewDeviceComponent } from './add-new-device/register-new-device.component';
import { ClientsDevicesListComponent } from './clients-devices-list/clients-devices-list.component';
import {HttpClientModule} from "@angular/common/http";
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';
import { EditDeviceViewComponent } from './edit-device-view/edit-device-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    AdminHomePageViewComponent,
    ClientsListViewComponent,
    DevicesListViewComponent,
    RegisterNewDeviceComponent,
    ClientsDevicesListComponent,
    EditUserViewComponent,
    EditDeviceViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
