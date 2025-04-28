import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { ActualityComponent } from './actuality/actuality.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LoginComponent,
    ActualityComponent
  ]
})
export class PublicModule { }
