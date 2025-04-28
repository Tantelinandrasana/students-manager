import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { StudentsComponent } from './students/students.component';
import { CourseComponent } from './course/course.component';
import { CommunicationComponent } from './communication/communication.component';
import { EdtComponent } from './course/edt/edt.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    FeaturesComponent,
    StudentsComponent,
    CourseComponent,
    CommunicationComponent,
    EdtComponent
  ]
})
export class FeaturesModule { }
