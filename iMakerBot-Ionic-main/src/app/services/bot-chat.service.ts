import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatBot } from '../_models/chatBot';

@Injectable({
  providedIn: 'root',
})
export class BotChatService {
  constructor(private http: HttpClient) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  urlbotChat = 'http://localhost:3000/ChatBot';

  getBotMsgs(): Observable<ChatBot[]> {
    return this.http.get<ChatBot[]>(`${this.urlbotChat}`);
  }
}
