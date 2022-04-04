import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  adduser(credentials:any):Observable<any>{
    let url = 'http://127.0.0.1:8000/api/signup'
    return this.http.post<any>(url, credentials)
  }
}
