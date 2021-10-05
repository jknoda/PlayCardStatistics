import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';

import { HomeComponent } from 'src/app/home/home.component';
import { JogoatualComponent } from 'src/app/jogoatual/jogoatual.component';
import { JogoatualService } from 'src/app/jogoatual/jogoatual.service';
import { OnegameModule } from 'src/app/onegame/onegame.module';
import { PredictModule } from 'src/app/predict/predict.module';
import { UltimapartidaModule } from 'src/app/ultimapartida/ultimapartida.module';
import { VersusModule } from 'src/app/versus/versus.module';
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
    providers: [],
    imports: [
        CommonModule, 
        RouterModule,
        DialogModule,

        DashboardModule,
        UltimapartidaModule,
        PredictModule,
        VersusModule,
        OnegameModule
    ]
})

export class MenuModule { }