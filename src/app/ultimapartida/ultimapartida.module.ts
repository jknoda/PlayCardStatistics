import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarModule } from '../selecionar/selecionar.module';
import { UltimapartidaComponent } from './ultimapartida.component';
import { UltimapartidaService } from './ultimapartida.service';



@NgModule({
  declarations: [UltimapartidaComponent],
  imports: [
    CommonModule,
    SelecionarModule
  ],
  providers: [UltimapartidaService],
  exports: [UltimapartidaComponent],
})
export class UltimapartidaModule { }
