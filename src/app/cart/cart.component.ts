import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() menu:any;
  cart:any[] =[]
  constructor() { }

  ngOnInit(): void {
    this.update_cart()


  }

total_cart(value:String){
  console.log(value);
}
get_qty(item:any,quantity:any){
  let itemId=document.getElementById(item)
  //alert(itemId.value)
  if (itemId){
    alert(quantity)
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
}
