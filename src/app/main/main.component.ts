import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../service/api-gateway.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loggedInId! : string;

  constructor(private auth : AuthService) { }
  

  ngOnInit(): void {
    this.loggedInId = this.auth.loggedIn.id;
  }

  logout() {
    this.auth.logout();
  }
}
