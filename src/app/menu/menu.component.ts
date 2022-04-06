import { Component, OnInit } from '@angular/core';
import { MenuService } from '../http-client/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList:any;
  // cart:{}[] =[{'meal':'rice'}]
  cart:{}[] =[]
  cartItemCount:number=0
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    try{
    let cart=JSON.parse(localStorage.getItem("cart") || "")
    this.cartItemCount=cart.length

    }
    catch{
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }
    this.menuService.getMenu().subscribe(data=>{

      this.menuList=data
    })
  }

  addToCart(menuItem:any){
    let cart=JSON.parse(localStorage.getItem("cart") || "")
    let itemExists=false
    menuItem['qty']=1
    
    cart.forEach((item:any) => {
      if (item.id===menuItem.id){
        itemExists=true;
        alert('item already in cart')
      }
    });

    if (itemExists==false){
    cart.push(menuItem);
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Item added to cart")
    
    }
    this.cartItemCount=cart.length
    // console.log(cart)
  } 
}
