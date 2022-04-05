import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UserloginService } from '../services/userlogin.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any
  user_obj:any
  constructor(private CookieService:CookieService, public LoginService:LoginService, private UserloginService:UserloginService) { }

  ngOnInit(): void {
    this.getuser()
  }
  getuser(){
      let user = this.CookieService.get('jwt')
      let token = {
        'jwt':user
      }
      this.LoginService.getuser(token).subscribe((data) => {
        this.user_obj = data
        console.log(data)
        this.setuser()
      })
  }
  setuser(){
    this.UserloginService.loginuser(this.user_obj)
  }
}
