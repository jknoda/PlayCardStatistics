import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnegameComponent } from './onegame.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnegameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  exports: [OnegameComponent]
})
export class OnegameModule { }
