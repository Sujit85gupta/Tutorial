import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './Auth/profile/profile.component';
import { WebsiteStudentCoursesComponent } from './courses/website-student-courses/website-student-courses.component';
import { WebsiteStudentDashboardComponent } from './users/website-student-dashboard/website-student-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    WebsiteStudentCoursesComponent,
    WebsiteStudentDashboardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
