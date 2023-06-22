import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderInformationComponent } from './order-information/order-information.component';
import { BannerComponent } from './banner/banner.component';
import { AcceptanceComponent } from './acceptance/acceptance.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Login2Component } from './login2/login2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'order-details',component:OrderDetailsComponent},
  {path:'banner',component:BannerComponent},
  {path:'login2',component:Login2Component},
  {path:'order-information',component:OrderInformationComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'acceptance',component:AcceptanceComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'rating',component:RatingComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
