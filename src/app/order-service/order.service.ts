import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string='http://127.0.0.1:8000/api/customer/2/orders/';
  constructor(private http:HttpClient) { }
    
  public getOrders():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
}
