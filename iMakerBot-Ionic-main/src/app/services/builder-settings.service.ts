import { BuilderSettings } from './../_models/builder-settings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BuilderSettingsService {
  settingsURL = 'http://localhost:3000/Setting';

  constructor(private http: HttpClient) {}

  // addSetting(setting: BuilderSettings): Observable<any> {
  //   return this.http.post(this.settingsURL , setting);
  // }
  addSetting(data: any) {
    return this.http.post<any>('http://localhost:3000/Setting', data).pipe(
      map((res: any) => res)
    );
  }
  getAllSettingData(){
    return this.http.get<any>('http://localhost:3000/Setting').pipe(
      map((res: any) => res)
    );
  }
  // editSetting(setting: BuilderSettings): Observable<any> {
  //   return this.http.put(this.settingsURL + "/edit-setting", setting);
  // }
  // updateSetting(setting: BuilderSettings, id: number): Observable<any> {
  //   return this.http.put(this.settingsURL + "/update/" + id, setting);
  // }
  // getSettingById(id: number): Observable<any> {
  //   return this.http.get(this.settingsURL + "/" + id);
  // }
  // getAllSettingData(): Observable<any> {
  //   return this.http.get(this.settingsURL + "/all-settings");
  // }
  // deleteSetting(id: number): Observable<any> {
  //   return this.http.delete(this.settingsURL + "/delete-Setting/" + id);
  // }
}
