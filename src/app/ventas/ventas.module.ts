import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VentasModule { }
