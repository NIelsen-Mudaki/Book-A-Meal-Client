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
  token:any
  constructor(private CookieService:CookieService,public LoginService:LoginService,private orderService:OrderService,private getUserOrdersService:GetUserOrdersService,private UserloginService:UserloginService) { }

  ngOnInit(): void {
  }
  loadOrders(){
    this.getorders()

  }

  setuser(){
    this.user = this.orderService.user
  }
  getorders(){
    this.setuser()
    this.orderService.getOrders().subscribe((data) =>{
      console.log(data)
      this.orders = data
      // setTimeout("getorders", 3000)
    })
  }


}
