import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './Auth/profile/profile.component';
import { WebsiteStudentCoursesComponent } from './courses/website-student-courses/website-student-courses.component';
import { WebsiteStudentDashboardComponent } from './users/website-student-dashboard/website-student-dashboard.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'website-student-profile',component:ProfileComponent
  },
  {
    path:'website-student-courses',component:WebsiteStudentCoursesComponent
  },
  {
    path:'website-student-dashboard',component:WebsiteStudentDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
