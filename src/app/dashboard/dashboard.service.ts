import { Injectable } from '@angular/core';
import { DashboardModel } from './dashboard.model';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {
    private url: string = ServiceConfig.API_ENDPOINT;
    constructor(private http: HttpClient) { }

    getDados(body:any): Observable<DashboardModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<DashboardModel>(this.url + "/oapi/playctrlstat/findallstat", body, httpOptions);
    }

    getNome(body:any): Observable<string> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<string>(this.url + "/oapi//playctrl/findname", body, httpOptions);
    }

}