import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
 constructor(private routes:Router){

 }
 ngOnInit(){

 }
 onclick(){
  this.routes.navigateByUrl('acceptance')
 }
}
