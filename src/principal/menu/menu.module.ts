import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [MenuComponent],
    exports: [MenuComponent],
    imports: [CommonModule, RouterModule]
})

export class MenuModule { }