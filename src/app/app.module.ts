import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MenuModule } from './menu/menu.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UltimapartidaModule } from './ultimapartida/ultimapartida.module';
import { PredictModule } from './predict/predict.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    UltimapartidaModule,
    PredictModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
