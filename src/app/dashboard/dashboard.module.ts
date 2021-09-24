import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard.component';
import {CardModule} from 'primeng/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { SelecionarModule } from '../selecionar/selecionar.module';

@NgModule({
    declarations: [DashboardComponent],
    imports:[
        CommonModule,
        CardModule,
        ScrollingModule,
        BrowserAnimationsModule,
        FormsModule,
        ChartModule,
        SelecionarModule
    ],
    providers: [DashboardService],
    exports: [DashboardComponent],
})

export class DashboardModule { }