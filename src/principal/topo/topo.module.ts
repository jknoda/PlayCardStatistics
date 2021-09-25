import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TopoComponent } from './topo.component';
import { TopoService } from './topo.service';

@NgModule({
    declarations: [TopoComponent],
    providers: [TopoService],
    imports: [BrowserModule, RouterModule],
    exports: [TopoComponent]
})

export class TopoModule { }