import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fas fa-home', routerLink:['home']},
      {label: 'Dashboard', icon: 'fas fa-tachometer-alt', routerLink:['dashboard']},      
      {label: 'Calendar', icon: 'fas fa-calendar'},
      {label: 'Edit', icon: 'fas fa-edit'},
      {label: 'Settings', icon: 'fas fai-cog'}
    ];
  }
}
