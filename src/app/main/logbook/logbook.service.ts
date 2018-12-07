import { Injectable } from '@angular/core';
import {Logbook} from "../../model/model.logbook";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from 'environments/environment';
import {Observable, of} from 'rxjs';

@Injectable()
export class LogbookService {

  constructor(public http: HttpClient) { }

  getAll(){
    console.log("getAll logbook");
    return this.http.get(environment.apiUrl+'/journals');
  }

  create(title: String, description: String){
    console.log("create logbook "+ title + " "+ description);
    return this.http.post(environment.apiUrl+'/journals',{title, description});
  }
}
