import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarComponent } from './selecionar.component';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SelecionarComponent],
    imports:[
        CommonModule,
        ScrollingModule,
        DropdownModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    exports: [SelecionarComponent],
})
export class SelecionarModule { }
