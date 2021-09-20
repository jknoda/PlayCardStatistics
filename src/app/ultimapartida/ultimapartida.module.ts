import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarModule } from '../selecionar/selecionar.module';
import { UltimapartidaComponent } from './ultimapartida.component';
import { CardModule } from 'primeng/card';
import { UltimapartidaService } from './ultimapartida.service';



@NgModule({
  declarations: [UltimapartidaComponent],
  imports: [
    CommonModule,
    CardModule,
    SelecionarModule
  ],
  providers: [UltimapartidaService],
  exports: [UltimapartidaComponent],
})
export class UltimapartidaModule { }
