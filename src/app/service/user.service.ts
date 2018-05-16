import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';



@Injectable()
export class UserService {
  apiUrl='http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  getById(id: number) {
    return this.http.get(this.apiUrl + '/user' + id);
  }

  create(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.apiUrl + '/user', user, {headers: headers});
  }

  update(user: User) {
    return this.http.put(this.apiUrl + '/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/users/' + id);
  }
}
