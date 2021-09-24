import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictComponent } from './predict.component';
import { CardModule } from 'primeng/card';
import { SelecionarModule } from '../selecionar/selecionar.module';
import { PredictService } from './predict.service';



@NgModule({
  declarations: [PredictComponent],
  imports: [
    CommonModule,
    CardModule,
    SelecionarModule
  ],
  providers: [PredictService],
  exports: [PredictComponent],
})
export class PredictModule { }
