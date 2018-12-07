import { Injectable } from '@angular/core';
import {Logbook} from "../../model/model.logbook";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from 'environments/environment';
import {Observable, of} from 'rxjs';
import {ConfigGetterService} from "../services/config-getter.service";

@Injectable()
export class LogbookService {

  constructor(public http: HttpClient,
              private configGetter: ConfigGetterService) { }

  getAll(){
    return this.http.get(`${this.configGetter.urlServer}/journals`);
  }

  create(title: String, description: String){
    return this.http.post(`${this.configGetter.urlServer}/journals`,{title, description}).subscribe( ret => {
    });
  }
}``
