// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { ActualityComponent } from './public/actuality/actuality.component';
import { StudentsComponent } from './features/students/students.component';
import { CourseComponent } from './features/course/course.component';
import { EdtComponent } from './features/course/edt/edt.component';
import { CommunicationComponent } from './features/communication/communication.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'actuality', component: ActualityComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'edt', component: EdtComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
