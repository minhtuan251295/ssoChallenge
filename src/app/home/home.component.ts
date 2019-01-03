import { Component, OnInit } from '@angular/core';
import { LogInService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: {};
  constructor(private logInService:LogInService) { }

  ngOnInit() {
    const token = localStorage.getItem("jwt_token");
    this.logInService.getUser().subscribe(
      (userGetted) =>{
        this.user = userGetted;
      }
    )
  }


  onSignOut(){
    this.logInService.emailEmit.next(null);
    this.logInService.passEmit.next(null);
    localStorage.removeItem("jwt_token");
  }
}
