import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
    constructor(private routes:Router){

    }
    ngOnInit(){


    }
    onclick(){
      this.routes.navigateByUrl('welcome')
    }
}
