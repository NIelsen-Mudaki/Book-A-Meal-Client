import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
   url = 'http://127.0.0.1:8000/api/menu/'
  constructor(private http:HttpClient) { }
  getmenu():Observable<any>{
    return this.http.get(this.url)
  }

}
