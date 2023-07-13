import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  url = 'http://localhost:4200/ventas';

  constructor() { }

  ngOnInit(): void {
  }

}
