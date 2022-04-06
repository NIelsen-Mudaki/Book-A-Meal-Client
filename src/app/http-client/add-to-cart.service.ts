import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }


  public addToCart(menuItem:any){
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
    // this.cartItemCount=cart.length
    console.log(cart)
    // alert('Item added')
  }
}
