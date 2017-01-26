require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import { Order } from './order';

@Component({
  selector: 'trumps-orders-app',
  template: `
  <div class="app">
     <img src="img/main.png"/>
     <home-page></home-page>
     <to-footer></to-footer>
  </div>`
})

export class AppComponent {
  orders: Order[];
  error: any;
  showNgFor = false; 
}

