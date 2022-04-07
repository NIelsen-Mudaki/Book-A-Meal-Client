import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any
  user:any
  constructor(private http:HttpClient) { }

  getuserid(user:any){
    this.user = user
  }
  getOrders():Observable<any>{
    console.log(this.user.id)
    return this.http.get<any>('http://127.0.0.1:8000/api/user/'+this.user.id+'/orders/')
  }
}
