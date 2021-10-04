import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UltimapartidaModule } from './ultimapartida/ultimapartida.module';
import { PredictModule } from './predict/predict.module';
import { MenuModule } from 'src/principal/menu/menu.module';
import { TopoModule } from 'src/principal/topo/topo.module';
import { VersusModule } from './versus/versus.module';
import { OnegameModule } from './onegame/onegame.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    MenuModule,
    TopoModule,

    DashboardModule,
    UltimapartidaModule,
    PredictModule,
    VersusModule,
    OnegameModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
