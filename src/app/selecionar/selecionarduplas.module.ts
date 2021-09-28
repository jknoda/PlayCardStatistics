import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarduplasComponent } from './selecionarduplas.component';
import { SelecionarModule } from './selecionar.module';

@NgModule({
    declarations: [SelecionarduplasComponent],
    imports:[
        CommonModule,
        SelecionarModule
    ],
    exports: [SelecionarduplasComponent],
})
export class SelecionarduplasModule { }
