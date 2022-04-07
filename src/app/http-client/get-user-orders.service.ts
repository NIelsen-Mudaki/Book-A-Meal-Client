import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetUserOrdersService {
  
  constructor(private http:HttpClient) { }
  
public get_user_orders(userid:any):Observable<any>{
  console.log(userid)
  let url=`http://localhost:8000/api/user/${userid}/orders/`
  return this.http.get<any[]>(url)


}
}
