import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private routes:Router){} 
 
  
 

  ngOnInit():void{
  }
    
    onclick(){
      this.routes.navigateByUrl('order-details')
  
    }
  }