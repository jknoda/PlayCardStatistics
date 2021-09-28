import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictComponent } from './predict.component';
import { SelecionarModule } from '../selecionar/selecionar.module';
import { PredictService } from './predict.service';



@NgModule({
  declarations: [PredictComponent],
  imports: [
    CommonModule,
    SelecionarModule
  ],
  providers: [PredictService],
  exports: [PredictComponent],
})
export class PredictModule { }
