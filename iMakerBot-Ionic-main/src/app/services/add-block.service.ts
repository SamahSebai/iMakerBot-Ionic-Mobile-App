import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddBlockService {

  constructor(private http: HttpClient) { }

  addBlock(data: any){
    return this.http.post<any>(
      'http://localhost:3000/Block',
      data
    ).pipe(map((res: any) => res)
    );
  }
  getData() {
    return this.http.get<any>('http://localhost:3000/Block').pipe(
      map((res: any) => res)
    );
  }
  deleteData(id: number) {
    return this.http.delete<any>('http://localhost:3000/Block/' + id).pipe(
      map((res: any) => res)
    );
  }
}
