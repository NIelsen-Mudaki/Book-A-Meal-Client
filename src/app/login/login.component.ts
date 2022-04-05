import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useremail:any
  password:any
  response = ''

  constructor(private LoginService:LoginService, private CookieService:CookieService) { }

  ngOnInit(): void {
  }
  loginuser(){
    let credentials = {
      'useremail':this.useremail,
      'password':this.password
    }
    this.LoginService.login(credentials).subscribe((data) =>{
      this.response = data
      try{
        let getcookies = this.CookieService.get("jwt")
      }
      catch{
          this.response = 'Authentication failed, wrong  username or password provided'
      }
    })
    
  }
}
