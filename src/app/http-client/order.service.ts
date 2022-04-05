import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string='http://localhost:8000/api/orders/createmulti/'
  constructor(private http:HttpClient) { }

public create_order(data:any):Observable<any[]>{

  return this.http.post<any[]>(this.url,data)
}

}
