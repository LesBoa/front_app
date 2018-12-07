import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {ConfigGetterService} from './config-getter.service';
@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient,
                private router: Router,
                private configGetter: ConfigGetterService,
    ) {
    }

    getAll() {
        this.http.get<User[]>(`${this.configGetter.urlServer}/users`).subscribe((data: User[]) => {
            return data;
        });
    }

    me() {
        return this.http.get<User>(`${this.configGetter.urlServer}/me`);
    }

    register(email: string, firstName: string, lastName: string, password: string) {
        this.http.post<User>(`${this.configGetter.urlServer}/register`,
            {'email': email, 'firstName': firstName, 'lastName': lastName, 'password': password}).subscribe(user => {
            this.router.navigate(['/auth/login']);
        });
    }
}