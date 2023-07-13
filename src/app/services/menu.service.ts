import { Injectable } from '@angular/core';

export interface IMenu {
  tittle: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private listMenu: IMenu[] = [
    { tittle: 'Clientes', url: '/clientes', icon: 'bi-people-fill' },
    { tittle: 'Empleados', url: '/empleados', icon: 'bi-person-video2' },
    { tittle: 'Productos', url: '/productos', icon: 'bi-boxes' },
    { tittle: 'Reportes', url: '/reportes', icon: 'bi-file-earmark-pdf' },
    { tittle: 'Ventas', url: '/ventas', icon: 'bi-cart3' }
  ];

  constructor() { }

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }
  
  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(menu => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}
