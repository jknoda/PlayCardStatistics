import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoatualComponent } from './jogoatual.component';
import { JogoatualService } from './jogoatual.service';

@NgModule({
  declarations: [JogoatualComponent],
  imports: [
    CommonModule
  ],
  providers: [JogoatualService],
  exports: [JogoatualComponent]
})
export class JogoatualModule { }
