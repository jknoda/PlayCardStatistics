import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusComponent } from './versus.component';
import { SelecionarduplasModule } from '../selecionar/selecionarduplas.module';
import { VersusService } from './versus.service';

@NgModule({
  declarations: [VersusComponent],
  imports: [
    CommonModule,
    SelecionarduplasModule,
  ],
  providers: [VersusService],
  exports: [VersusComponent]
})
export class VersusModule { }
