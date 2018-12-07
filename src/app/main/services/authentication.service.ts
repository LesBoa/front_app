import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";
import {UserService} from "./user.service";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    private bearerTokenSubject: BehaviorSubject<string>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
                private userService: UserService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.bearerTokenSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem(('bearerToken'))));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get bearerTokenValue(): string {
        return this.bearerTokenSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, {email, password})
            .pipe(map(res => {
                const bearerToken = res;

                // login successful if there's a jwt token in the respons
                if (bearerToken) {
                    localStorage.setItem('bearerToken', JSON.stringify(bearerToken));
                    this.bearerTokenSubject.next(bearerToken);
                }
                return bearerToken;
            }))
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('bearerToken');
        this.bearerTokenSubject.next(null);
    }
}