import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  send(fields:any):Observable<any> {
    return this.http.post<any>(this.baseUrl,fields);
  }

  receive():Observable<string>{
    return this.http.get<string>(this.baseUrl);
  }
 
}
