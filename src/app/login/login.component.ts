import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useremail:any
  password:any
  constructor(private LoginService:LoginService) { }

  ngOnInit(): void {
  }
  loginuser(){
    let credentials = {
      'useremail':this.useremail,
      'password':this.password
    }
    this.LoginService.login(credentials).subscribe((data) =>{
      console.log(data)
    })
  }
}
