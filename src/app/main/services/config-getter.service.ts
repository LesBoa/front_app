import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigGetterService {

    private urlSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
      this.urlSubject = new BehaviorSubject('');
  }

  goFetchConfig() {
      this.http.get('./env.json').subscribe((data: any) => {
          this.urlSubject.next(data.SERVER_URL);
      });
  }

  public get urlServer(): string {
      return this.urlSubject.value;
  }


}
