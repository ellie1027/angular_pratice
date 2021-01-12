import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiGatewayService } from './service/api-gateway.service'

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule    
  ],
  providers: [
    ApiGatewayService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
