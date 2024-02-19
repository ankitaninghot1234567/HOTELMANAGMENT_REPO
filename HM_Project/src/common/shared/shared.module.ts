import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../common-componenets/signin/signin.component';
import { SignupComponent } from '../common-componenets/signup/signup.component';
import { LandingComponent } from '../common-componenets/landing/landing.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent

  ],
  imports: [
    CommonModule
  ],

  exports:[ SignupComponent,
  SigninComponent]
})
export class SharedModule { }
