import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarService } from './selecionar.service';
import { SelecionarComponent } from './selecionar.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SelecionarComponent],
    imports:[
        CommonModule,
        CardModule,
        ScrollingModule,
        DropdownModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [SelecionarService],
    exports: [SelecionarComponent],
})
export class SelecionarModule { }
