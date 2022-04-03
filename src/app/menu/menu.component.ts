import { Component, OnInit } from '@angular/core';
import { MenuService } from '../http-client/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList:any;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {

    this.menuService.getMenu().subscribe(data=>{

      this.menuList=data
    })
  }

}
