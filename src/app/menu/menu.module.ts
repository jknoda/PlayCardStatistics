import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent  } from './menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    TabMenuModule, 
    RouterModule 
  ],
  exports:[
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { 
}
