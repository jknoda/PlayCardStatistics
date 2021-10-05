import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarModule } from '../selecionar/selecionar.module';
import { UltimapartidaComponent } from './ultimapartida.component';

@NgModule({
  declarations: [UltimapartidaComponent],
  imports: [
    CommonModule,
    SelecionarModule
  ],
  exports: [UltimapartidaComponent],
})
export class UltimapartidaModule { }
