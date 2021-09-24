import { Injectable } from '@angular/core';
import { JogadasModel } from '../model/jogadas.model';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {
    private url: string = ServiceConfig.API_ENDPOINT;
    constructor(private http: HttpClient) { }

    getDados(body:any): Observable<JogadasModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            })
        };        
        return this.http.post<JogadasModel>(this.url + "/oapi/playctrlstat/findallstat", body, httpOptions);
    }
}


