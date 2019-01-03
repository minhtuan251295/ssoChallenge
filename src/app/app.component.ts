import { Component, OnInit } from '@angular/core';
import { LogInService } from './service/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssoChallenge';

  logged:boolean = false;
  emailNamed: boolean = false;
  Email: string;
  Password: string;
  constructor(private logInService: LogInService){
    const token = localStorage.getItem("jwt_token");
    if(token !== null){
      this.logInService.verifyJwt().subscribe(
        (user) =>{
          this.logged = true;
          Swal({
            type: 'success',
            text: 'Welcome back'
          })
        },
        (error) => {
          error = JSON.parse(error._body);
          // Swal({
          //   type: 'error',
          //   text: error.message,
          // })
        },
      );
    }
    this.getEmail();
    this.getPass();
  }

  getEmail(){
    this.logInService.emailEmit.subscribe(
      (email:string) => {
        if(email == null){
          this.logged = false;
          this.emailNamed = false;
        }
        else{
          this.Email = email;
          this.emailNamed = true;
        }
      }
    );
  }
  getPass(){
    this.logInService.passEmit.subscribe(
      (pass:string) =>{
        if(pass == null){
          this.emailNamed = false;
        }
        else{
          this.Password = pass;
          this.createJWT();
        }
      }
    );

  }
  createJWT(){
    this.logInService.createJwt({email: this.Email, password: this.Password, fingerprint: 'fingerprint'}).subscribe(
      (jwtObject) => {
        localStorage.setItem("jwt_token", jwtObject.token);
        this.logged = true;
      },
      (error) =>{
        Swal({
          type: 'error',
          text: 'Wrong Email or PassWord! Please check email or password',
        })
      }
    )
  }
  ngOnInit(){
    
  }
}
