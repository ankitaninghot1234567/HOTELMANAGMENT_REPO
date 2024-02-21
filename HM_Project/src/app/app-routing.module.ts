import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/common/common-componenets/landing/landing.component';
import { SigninComponent } from 'src/common/common-componenets/signin/signin.component';
import { SignupComponent } from 'src/common/common-componenets/signup/signup.component';

const routes: Routes = [
{path:'', component:LandingComponent},
{path:'landing', component:LandingComponent},
{path:'signin', component:SigninComponent},
{path:'singup', component:SignupComponent},
{path : 'owner', loadChildren:()=>import('./owner/owner.module').then(m=>m. OwnerModule)},
{path : 'user', loadChildren:()=>import('./user/user.module').then(m=>m. UserModule)},
{path : 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m. AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
