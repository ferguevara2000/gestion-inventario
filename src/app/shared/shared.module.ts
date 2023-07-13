import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from './component/tittle/tittle.component';
import { ContainerComponent } from './component/container/container.component';
import { TableComponent } from './component/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { KeypadButtomComponent } from './component/keypad-buttom/keypad-buttom.component';



@NgModule({
  declarations: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    KeypadButtomComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    NgxPaginationModule,
    KeypadButtomComponent
  ]
})
export class SharedModule { }
