import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name="ankita"
  isShowPass = false;
  userData:any;
  isValid=false;
  constructor(){}
  login(data:any){}
  toShowPassword() {
    this.isShowPass = !this.isShowPass;
  }
}
