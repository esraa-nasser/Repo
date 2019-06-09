import { HomeAfterLoginComponent } from './home-after-login/home-after-login.component';
import { HomeWithoutLoginComponent } from './home-without-login/home-without-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{ path: '', component: HomeAfterLoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
