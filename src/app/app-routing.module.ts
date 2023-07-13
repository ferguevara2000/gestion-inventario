import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path : '', component:PageLoginComponent},
  {path : 'empleados', loadChildren:() => import('./empleados/empleados.module').then(m => m.EmpleadosModule)},
  {path : 'productos', loadChildren:() => import('./productos/productos.module').then(m => m.ProductosModule)},
  {path : 'clientes', loadChildren:() => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path : 'ventas', loadChildren:() => import('./ventas/ventas.module').then(m => m.VentasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
