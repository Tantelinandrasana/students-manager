// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Important, AppRouting no mi-manage

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    AppComponent,
    AppRoutingModule  // Tokony AppRoutingModule irery no mi-route
  ],
  providers: []
})
export class AppModule { }
