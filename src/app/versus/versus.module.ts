import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusComponent } from './versus.component';
import { SelecionarduplasModule } from '../selecionar/selecionarduplas.module';
import { VersusService } from './versus.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [VersusComponent],
  imports: [
    CommonModule,
    SelecionarduplasModule,
    ProgressSpinnerModule
  ],
  providers: [VersusService],
  exports: [VersusComponent]
})
export class VersusModule { }
