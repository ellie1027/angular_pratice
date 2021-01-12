import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailedMessage!: string;
  id!: string;
  password!: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.id, this.password).subscribe((result: boolean) => {
      if(result) {
        this.auth.navigate('/main');
      }
      else {
        this.loginFailedMessage = "Login Failed";
      }

    });

  }

}
