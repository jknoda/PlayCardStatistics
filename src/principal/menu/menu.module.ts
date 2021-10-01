import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DialogModule} from 'primeng/dialog';

import { HomeComponent } from 'src/app/home/home.component';
import { JogoatualComponent } from 'src/app/jogoatual/jogoatual.component';
import { JogoatualService } from 'src/app/jogoatual/jogoatual.service';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [        
        MenuComponent,
        HomeComponent,
        JogoatualComponent
    ],
    exports: [
        MenuComponent,
        HomeComponent,
        JogoatualComponent
    ],
    providers: [
        JogoatualService
    ],
    imports: [
        CommonModule, 
        RouterModule,
        DialogModule
    ]
})

export class MenuModule { }