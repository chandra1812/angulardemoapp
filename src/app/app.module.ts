import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentnameComponent } from './componentname/componentname.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { TestService } from './test.service';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    NewComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [
    TestService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
