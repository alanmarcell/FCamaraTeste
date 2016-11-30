import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from "../models/user";

@Injectable()
export class UserService {

    private usersUrl = 'api/users';  // URL to web api

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getUser(id: string) {
        return this.http.get(this.usersUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(user: User): Promise<User> {
        if (user._id) {
            return this.put(user);
        }
        return this.post(user);
    }

    private post(user: User): Promise<User> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.usersUrl, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(response => {
                return response.json().data;
            })
            .catch(this.handleError);
    }

    private put(user: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.usersUrl}/${user._id}`;

        return this.http
            .put(url, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    delete(user: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.usersUrl}/${user._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}