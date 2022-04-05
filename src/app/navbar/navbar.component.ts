import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any
  constructor(private CookieService:CookieService, public LoginService:LoginService) { }

  ngOnInit(): void {
    this.getuser()
  }
  getuser(){
      let user = this.CookieService.get('jwt')
      let token = {
        'jwt':user
      }
      this.LoginService.getuser(token).subscribe((data) => {
      console.log(data)
      })
  }
}
