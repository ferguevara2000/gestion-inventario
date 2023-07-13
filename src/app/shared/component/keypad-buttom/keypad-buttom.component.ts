import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-keypad-buttom',
  templateUrl: './keypad-buttom.component.html',
  styleUrls: ['./keypad-buttom.component.css']
})
export class KeypadButtomComponent implements OnInit {

  @Input() data:any;
  @Input() titulo!:string;

  constructor() { }

  ngOnInit(): void {
  }

  downloadExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.data, {header:['dataprop1', 'dataprop2']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, this.titulo + ".xlsx");
  }

}
