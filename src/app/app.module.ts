import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteRoutingModule } from './route/route-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
