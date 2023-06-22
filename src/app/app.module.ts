import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderInformationComponent } from './order-information/order-information.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AcceptanceComponent } from './acceptance/acceptance.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    OrderInformationComponent,
    BannerComponent,
    WelcomeComponent,
    AcceptanceComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    Login2Component,
    ContactusComponent,
    RatingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
