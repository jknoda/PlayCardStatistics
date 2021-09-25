import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
//import { DadosModel } from '../../app/dados/dados.model';
//import { AuthService } from '../../app/auth/auth.service';
//import { ServiceConfig } from '../../app/_config/services.config';

@Injectable()
export class TopoService {
    //private url: string = ServiceConfig.API_ENDPOINT;

    constructor(){

    }

    /*
    constructor(private authService: AuthService, private http: Http) { }

    getLojas(): Observable<DadosModel[]> {
        let token = localStorage.getItem('access_token');
        let clientId = localStorage.getItem('client_id');
        let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.url + '/Company/GetCompanies/' + clientId, options)
            .map(res => <DadosModel[]>res.json());
    }

    logout() {
        this.authService.logout();
    }
    */
}