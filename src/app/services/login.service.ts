import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://127.0.0.1:8000/api/login'
  constructor(private http:HttpClient) { }
  login(credentials:any):Observable<any>{
    return this.http.post<any>(this.url ,credentials)
  }
}
