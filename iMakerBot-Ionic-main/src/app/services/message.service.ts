import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../_models/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  urlmsg='http://localhost:3000/Message';
  constructor(private http: HttpClient) { }

  getmsg(): Observable<Message[]>{
    return this.http.get<Message[]>(`${this.urlmsg}`);
  }
}
