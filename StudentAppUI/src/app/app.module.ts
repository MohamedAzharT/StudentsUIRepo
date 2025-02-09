import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsListviewComponent } from './students-listview/students-listview.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    StudentRegistrationComponent,
    StudentsListviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    TableModule,
    PasswordModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
