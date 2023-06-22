import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private routes:Router){}
 

  ngOnInit(){
  
  }
  /*Images=[{
 
    alt:'image1',
    title:'LOGIN AS A DONOR',
    desc:'Food donation refers to the act of giving food to those in need, typically through charitable organizations or community initiatives.',
    button:'Click Here To Donate !!!'
  },
  {
    
    alt:'image2',
    title:'LOGIN AS A RECEIVER',
    desc:'Receiving food donations involves the process of accepting and distributing donated food to individuals or communities in need.',
    button:'Click Here To Receive !!!'
  }
  ]*/
  onclick() {
    this.routes.navigateByUrl('login');
    
  }
  on(){
    this.routes.navigateByUrl('login2')
  }
}
