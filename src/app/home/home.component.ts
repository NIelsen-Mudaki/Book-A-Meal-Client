import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../services/menu-item.service';
import { AddToCartService } from '../http-client/add-to-cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu:any
  cart:{}[] =[]
  cartItemCount:number=0
  constructor(private MenuItemService:MenuItemService, private AddToCartService:AddToCartService) { }

  ngOnInit(): void {
    this.getmenus()
    try{
      let cart=JSON.parse(localStorage.getItem("cart") || "")
      this.cartItemCount=cart.length
  
      }
      catch{
        localStorage.setItem("cart",JSON.stringify(this.cart))
      }
  }
  
  getmenus(){
    this.MenuItemService.getmenu().subscribe((data) =>{
      this.menu = data
    })
  }

  addtocart(menu:any){
    this.AddToCartService.addToCart(menu)
    let cart=JSON.parse(localStorage.getItem("cart") || "")
    this.cartItemCount=cart.length
  }
  
}
function indesx(indesx: any) {
  throw new Error('Function not implemented.');
}

