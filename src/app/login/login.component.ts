import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useremail:any
  password:any
  response:any

  constructor(private LoginService:LoginService, private CookieService:CookieService, private route:Router) { }

  ngOnInit(): void {
  }
  loginuser(){
    let credentials = {
      'useremail':this.useremail,
      'password':this.password
    }
    this.LoginService.login(credentials).subscribe((data) =>{
      if(typeof(data) == 'object'){
           const myDate: Date = new Date();
           myDate.setHours( myDate.getHours() + 1 );
           this.CookieService.set("jwt", data.jwt,myDate)
           this.route.navigate(['/'])
      }else{
        this.response = data
      }
    })
    
  }
}
