import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  constructor(private routes:Router){

  }
  ngOnInit(){

  }
    onclick(){
      this.routes.navigateByUrl("banner")
    }
  
      
   
}
