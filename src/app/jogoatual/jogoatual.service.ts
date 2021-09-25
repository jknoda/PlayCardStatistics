import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NowModel } from '../model/now.model';

@Injectable()
export class JogoatualService {
    private url: string = ServiceConfig.API_ENDPOINT;
    constructor(private http: HttpClient) { }


    getNow(body:any): Observable<NowModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<NowModel>(this.url + "/oapi/play/now", body, httpOptions);
    }

}