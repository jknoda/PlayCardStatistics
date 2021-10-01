import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictComponent } from './predict.component';
import { SelecionarModule } from '../selecionar/selecionar.module';
import { PredictService } from './predict.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [PredictComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    SelecionarModule
  ],
  providers: [PredictService],
  exports: [PredictComponent],
})
export class PredictModule { }
