import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://127.0.0.1:8000/api/login'
  constructor(private http:HttpClient) { }
  login(credentials:any):Observable<any>{
    const httpOptions = {
      withCredentials: true
    };
    return this.http.post<any>(this.url ,credentials,httpOptions)
  }

  getuser(token:any):Observable<any>{
    let url = 'http://127.0.0.1:8000/api/user/'
    return this.http.post(url, token)
  }
}
