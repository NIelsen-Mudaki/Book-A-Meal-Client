import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service/order.service';
import { GetUserOrdersService } from '../http-client/get-user-orders.service';
import { UserloginService } from '../services/userlogin.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any
  id:any
  userOrders:any
  user:any;
  activeUser:any
  user_obj:any;
  constructor(private CookieService:CookieService,public LoginService:LoginService,private orderService:OrderService,private getUserOrdersService:GetUserOrdersService,private UserloginService:UserloginService) { }

  ngOnInit(): void {
    this.getuser()
    // this.getOrders()
    this.getUserOrders()
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
  this.activeUser=this.UserloginService.user.id
  }


  getUserOrders(){

      this.getUserOrdersService.get_user_orders(this.activeUser).subscribe((data)=>{

        this.userOrders=data
      });
    
    
    // catch{

    //   alert('please login')
    // }


  }
}
