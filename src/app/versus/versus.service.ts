import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../_config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VersusModel } from '../model/versus.model';


@Injectable({
  providedIn: 'root'
})
export class VersusService {
  private urlPy: string = ServiceConfig.APIPY_ENDPOINT;
  private url: string = ServiceConfig.API_ENDPOINT;
  constructor(private http: HttpClient) { }

  getDadosVersus(body:any): Observable<VersusModel> {
    let httpOptions = {
        headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    };        
    return this.http.post<VersusModel>(this.url + "/oapi/playctrlstat/findindversus", body, httpOptions);
  }

  getVersus(body:any): Observable<VersusModel> {
    let httpOptions = {
        headers: new HttpHeaders({ 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        })
    };        
    return this.http.post<VersusModel>(this.urlPy + "/versus", body, httpOptions);
}

}
