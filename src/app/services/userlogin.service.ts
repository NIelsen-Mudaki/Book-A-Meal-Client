import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  user:any
  constructor() { }

  loginuser(users:any){
    this.user = users
    console.log(this.user)
  }
}
