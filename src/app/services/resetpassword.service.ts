import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private http:HttpClient) { }
  resetpassword(credentials:any){
    let url = 'http://127.0.0.1:8000/api/reset/password'
    return this.http.post<any>(url, credentials)
  }
}
