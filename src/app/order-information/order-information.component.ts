import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent {
  constructor(private routes:Router){

  }
  ngOnInit(){

  }
  onclick(){
    this.routes.navigateByUrl('acceptance')
  }

}
