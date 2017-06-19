import { Injectable } from '@angular/core';
import { HttpClient } from '../httpClient';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient) { }

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

  delete(user: User) {

    let url = `${this.usersUrl}/${user._id}`;

    return this.http
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private post(user: User): Promise<User> {

    return this.http
      .post(this.usersUrl, JSON.stringify(user))
      .toPromise()
      .then(response => {
        return response.json().data;
      })
      .catch(this.handleError);
  }

  private put(user: User) {

    let url = `${this.usersUrl}/${user._id}`;

    return this.http
      .put(url, JSON.stringify(user))
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
