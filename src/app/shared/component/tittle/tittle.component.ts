import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {

  path:IMenu
  constructor(private menuService:MenuService, private activtedRoute:ActivatedRoute) {
  const currentPath = '/' + this.activtedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
  this.path = this.menuService.getMenuByUrl(currentPath);
   }

  ngOnInit(): void {
  }

}
