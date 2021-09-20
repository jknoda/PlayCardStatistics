import { Injectable } from '@angular/core';
import {JogadasModel } from '../model/jogadas.model';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SelecionarService {
    private url: string = ServiceConfig.API_ENDPOINT;
    constructor(private http: HttpClient) { }

    getNome(body:any): Observable<string> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<string>(this.url + "/oapi//playctrl/findname", body, httpOptions);
    }

}