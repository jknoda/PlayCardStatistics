import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PredictModel } from '../model/predict.model.';

@Injectable()
export class PredictService {
    private urlPy: string = ServiceConfig.APIPY_ENDPOINT;
    private url: string = ServiceConfig.API_ENDPOINT;
    constructor(private http: HttpClient) { }


    getDadosDupla(body:any): Observable<PredictModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<PredictModel>(this.url + "/oapi/playctrlstat/findind", body, httpOptions);
    }

    getPredict(body:any): Observable<PredictModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            })
        };        
        return this.http.post<PredictModel>(this.urlPy + "/predict", body, httpOptions);
    }
}