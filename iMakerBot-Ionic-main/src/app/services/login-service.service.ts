/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
UrlLogin=environment.host+'/login';
  constructor(private http: HttpClient) { }
  Login(email: any,password: any){
    return this.http.post(this.UrlLogin,{email,password});

  }
}
