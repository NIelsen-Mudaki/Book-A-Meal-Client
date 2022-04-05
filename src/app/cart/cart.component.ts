import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() menu:any;
  cart:any[] =[]
  cartTotal:any=0
  constructor() { }

  ngOnInit(): void {
    this.update_cart()

    this.get_order_total()
  }

total_cart(value:String){
  console.log(value);
}
get_qty(item:any,quantity:any){
  let itemId=document.getElementById(item)
  this.update_quantity(item,quantity)
  //alert(itemId.value)
  if (itemId){
    // alert(quantity)
  }
}

update_cart(){
  try{
  this.cart=JSON.parse(localStorage.getItem("cart") || "")
  //this.cartItemCount=cart.length

  }
  
  catch{
    console.log('Cart is Empty')
    //localStorage.setItem("cart",JSON.stringify(this.cart))
  }
}

update_quantity(id:any,qty:any){

  let current_cart=JSON.parse(localStorage.getItem("cart") || "")
  for (let item of current_cart){
    if (item.id==id){
      item.qty=qty
    }

  }
  this.cart=current_cart
  localStorage.setItem("cart",JSON.stringify(this.cart))
  this.get_order_total()
 
}

get_order_total(){
  let current_cart=JSON.parse(localStorage.getItem("cart") || "")
  let sum=0
  for (let item of current_cart){
    sum += item.price * item.qty
  }
  this.cartTotal=sum
}

}
