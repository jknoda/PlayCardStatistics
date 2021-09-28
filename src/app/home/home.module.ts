import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    declarations: [HomeComponent],
    imports:[
        CommonModule,
        DialogModule
    ],
    exports: [HomeComponent],
})

export class HomedModule { }