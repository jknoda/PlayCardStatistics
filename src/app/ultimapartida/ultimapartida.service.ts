import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JogoModel } from '../model/jogo.model';
import { RodadaModel } from '../model/rodadas.model';

@Injectable()
export class UltimapartidaService {
    private url: string = ServiceConfig.API_ENDPOINT;
    constructor(private http: HttpClient) { }

    getDados(body:any): Observable<JogoModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<JogoModel>(this.url + "/oapi/playctrl/findlastgame", body, httpOptions);
    }

    getDadosRodada(body:any): Observable<RodadaModel> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        };        
        return this.http.post<RodadaModel>(this.url + "/oapi/playctrlstat/findall", body, httpOptions);
    }
}