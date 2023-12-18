/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  UrlRegister='http://localhost:3000/register';
  constructor(private http: HttpClient) { }
Register(companyEmployeesNumber: any,email: any,fullName: any,password: any,phoneNumber: any){
   return this.http.post(this.UrlRegister,{companyEmployeesNumber ,email,fullName,password,phoneNumber});
}
}
