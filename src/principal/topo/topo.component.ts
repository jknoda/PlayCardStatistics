import { Component, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { TopoService } from './topo.service';

@Component({
    selector: 'topo',
    templateUrl: './topo.component.html',
    styles: [`
        .navbar-brand { margin-left: 20px; }

        .right-section {
            position: absolute;
            right: 20px;
        }

        i { padding: 12px; }

        a { color: #fff !important; cursor: pointer; }
        .fa { color: #fff; }
        `]
})

export class TopoComponent implements OnInit {
    isCollapsed = false;
    isLoading: boolean = true;
    companyName: string = "";
    isOpen: boolean = true;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    /*
     * Collapse the menu.
     */
    onMenuCollapse() {
        this.isCollapsed = !this.isCollapsed;
        //this.topoService.isCollapsed = this.isCollapsed;
        //this.topoService.toggle.next(this.isCollapsed);
    }
}