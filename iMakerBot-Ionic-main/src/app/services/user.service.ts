import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User1 } from '../_models/user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urluser='http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  getUser(): Observable<User1[]>{
    return this.http.get<User1[]>(`${this.urluser}`);
  }
}
