import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './directives/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './service/authentication.service';
import {UserService} from './service/user.service';
import {FormsModule} from '@angular/forms';
import { routing } from './app.routing';
import {AlertService} from './service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
