import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listMenu:IMenu[];

  constructor(private menuService:MenuService) { 
    this.listMenu = this.menuService.getMenu();
   }

  ngOnInit(): void {
  }

}
