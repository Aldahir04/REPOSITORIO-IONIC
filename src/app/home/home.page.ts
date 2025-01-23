import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit()  {
    console.log('hola mundo');
    let numero = 0;
  
    numero = 5;
    numero = 3;
    numero = 1;


    console.log('chucho');
    console.log('bogueto');
    console.log('destructor');
    console.log('pulgarsin');
      
  }

}
