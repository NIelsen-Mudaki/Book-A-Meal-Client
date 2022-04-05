import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url:string='http://localhost:8000/api/menu/'
  constructor(private http:HttpClient) { }

public getMenu():Observable<any[]>{

  return this.http.get<any[]>(this.url)
}


}
