import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../services/menu-item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu:any
  constructor(private MenuItemService:MenuItemService) { }

  ngOnInit(): void {
    this.getmenus()
  }
  
  getmenus(){
    this.MenuItemService.getmenu().subscribe((data) =>{
      this.menu = data
    })
  }
  addtocart(id:any){
    let item_tocart:any
    let cart:any = localStorage.getItem("cart")
    let stored_cart = JSON.parse(cart)
    let items_cart:any
    let final_item:any = []
    let items = this.menu.forEach((x:any) => {
      if(x.id == id){
        items_cart = x
        console.log(x)
        console.log(id)
      }else{
        
      }
    })
    items_cart['qty'] = 1
    let item_match = 'false'
    let item_add:any
    if(cart){
      let setitems = stored_cart.forEach((y:any) =>{
        if(y.id == items_cart.id){
          alert('item already added')
          item_match = 'true'
        }else{
          item_add = items_cart
        }
      })
    }else{
      cart = [items_cart]
      localStorage.setItem("cart", JSON.stringify(cart))
    }

    if(item_add && item_match == 'false'){
      stored_cart.push(item_add)
      localStorage.setItem("cart", '')
      localStorage.setItem("cart", JSON.stringify(stored_cart))
    }
  }
  
}
function indesx(indesx: any) {
  throw new Error('Function not implemented.');
}

