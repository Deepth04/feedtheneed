import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderInformationComponent } from '../order-information/order-information.component';

@Component({
  selector: 'app-acceptance',
  templateUrl: './acceptance.component.html',
  styleUrls: ['./acceptance.component.css']
})
export class AcceptanceComponent {
  constructor(private routes:Router){

  }
  ngOnInit(){

  }
  onclick(){
    this.routes.navigateByUrl('order-information')
  
  }
  on(){
    this.routes.navigateByUrl('welcome')
  }
}
