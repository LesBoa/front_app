import { Injectable } from '@angular/core';
import {Logbook} from "../../model/model.logbook";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from 'environments/environment';
import {Observable, of} from 'rxjs';

@Injectable()
export class StockService {

  constructor(public http: HttpClient) { }

  getAll(){
    console.log("getAll stock");
    return this.http.get(environment.apiUrl+'/stock');
  }

  createStock(name: String, quantite: number, unite: String){
    console.log("create stock "+ name + " "+ quantite + " "+ unite);
    return this.http.post(environment.apiUrl+'/stock',{name, quantite, unite});
  }

  createAction(name: String, variation: number, icon: String){
    console.log("create action "+ name + " "+ variation + " "+ icon);
    return this.http.post(environment.apiUrl+'/action',{name, variation, icon});
  }
}
