import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  message: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmitClick() {
    this.loginService.sendLogin(this.userEmail,this.userPassword)
      .subscribe(resp => {
        console.log(resp.body.body);
        this.message = resp.body.message;
      })
  }

}
