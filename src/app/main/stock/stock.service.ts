import { Injectable } from '@angular/core';
import {Logbook} from "../../model/model.logbook";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from 'environments/environment';
import {Observable, of} from 'rxjs';
import {ConfigGetterService} from "../services/config-getter.service";

@Injectable()
export class StockService {

  constructor(public http: HttpClient,
              private configGetter: ConfigGetterService,
              ) { }

  getAll(){
    return this.http.get(`${this.configGetter.urlServer}/stocks`);
  }

  createStock(name: String, quantite: number, unite: String){
    return this.http.post(`${this.configGetter.urlServer}'/stocks`,{name, quantite, unite}).subscribe( ret => {
    });
  }

  createAction(name: String, variation: number, icon: String){
    return this.http.post(`${this.configGetter.urlServer}/actions`,{name, variation, icon}).subscribe( ret => {

    });
  }
}
