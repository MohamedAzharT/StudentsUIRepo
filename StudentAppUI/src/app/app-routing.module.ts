import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsListviewComponent } from './students-listview/students-listview.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to /login on load
  {path:'login',component:SignupLoginComponent},
  {path:'register',component:StudentRegistrationComponent},
  {path:'Studentlistview',component:StudentsListviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
