import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http:HttpClient) { }
  signupnewslatter(emailadress:any):Observable<any>{
    let url = 'http://127.0.0.1:9000/api/newsletter/'
    return this.http.post(url, emailadress)
  }
}
