import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orderService.getOrders().subscribe((data) =>{
      this.orders = data
      console.log(data)
    })
  }
}
