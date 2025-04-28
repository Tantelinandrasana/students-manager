import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { StudentsComponent } from './students/students.component';
import { CourseComponent } from './course/course.component';
import { CommunicationComponent } from './communication/communication.component';
import { EdtComponent } from './course/edt/edt.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent, children: [
      { path: 'student', component: StudentsComponent },
      { path: 'course', component: CourseComponent },
      { path: 'communication', component: CommunicationComponent },
      { path: 'edt', component: EdtComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
