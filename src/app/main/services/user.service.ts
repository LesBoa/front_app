import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient,
                private router: Router,
    ) {
    }

    getAll() {
        this.http.get<User[]>(`${environment.apiUrl}/users`).subscribe((data: User[]) => {
            return data;
        });
    }

    me() {
        return this.http.get<User>(`${environment.apiUrl}/me`);
    }

    register(email: string, firstName: string, lastName: string, password: string) {
        this.http.post<User>(`${environment.apiUrl}/register`,
            {'email': email, 'firstName': firstName, 'lastName': lastName, 'password': password}).subscribe(user => {
            this.router.navigate(['/auth/login']);
        });
    }
}