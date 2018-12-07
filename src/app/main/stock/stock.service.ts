import { Injectable } from '@angular/core';
import {Logbook} from "../../model/model.logbook";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from 'environments/environment';
import {Observable, of} from 'rxjs';

@Injectable()
export class StockService {

  constructor(public http: HttpClient) { }

  getAll(){
    return this.http.get(environment.apiUrl+'/stocks');
  }

  createStock(name: String, quantite: number, unite: String){
    return this.http.post(environment.apiUrl+'/stocks',{name, quantite, unite}).subscribe( ret => {

    });
  }

  createAction(name: String, variation: number, icon: String){
    return this.http.post(environment.apiUrl+'/actions',{name, variation, icon}).subscribe( ret => {

    });
  }
}
