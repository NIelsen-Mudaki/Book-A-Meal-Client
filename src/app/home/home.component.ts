import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../services/menu-item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private MenuItemService:MenuItemService) { }

  ngOnInit(): void {
    this.getmenus()
  }
  
  getmenus(){
    this.MenuItemService.getmenu().subscribe((data) =>{
      console.log(data)
    })
  }
}
