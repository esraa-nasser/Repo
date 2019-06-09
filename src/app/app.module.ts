import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  }   from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { HomeWithoutLoginComponent } from './home-without-login/home-without-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeAfterLoginComponent } from './home-after-login/home-after-login.component';
import { RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarWithoutLoginComponent } from './navbar-without-login/navbar-without-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeWithoutLoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeAfterLoginComponent,
    RegisterationComponent,
    NavbarWithoutLoginComponent,
    ContactUsComponent,
    HelpComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,ReactiveFormsModule,NgbModule,RouterModule.forRoot([
      {path:'register',component:RegisterationComponent},
      {path:'login',component:LoginComponent},
      {path:'homewithoutlogin',component:HomeWithoutLoginComponent},
      {path:'HomeAfterLogin',component:HomeAfterLoginComponent},
      {path:'contactus',component:ContactUsComponent},
      {path:'help',component:HelpComponent},
      {path:'aboutus',component:AboutUsComponent}
    ])
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
