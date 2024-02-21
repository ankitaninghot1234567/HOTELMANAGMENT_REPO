import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../common-componenets/signin/signin.component';
import { SignupComponent } from '../common-componenets/signup/signup.component';
import { LandingComponent } from '../common-componenets/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[ 
    SignupComponent,
  SigninComponent,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule]
})
export class SharedModule { }
