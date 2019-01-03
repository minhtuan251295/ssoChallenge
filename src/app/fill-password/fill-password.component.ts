import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInService } from '../service/login.service';

@Component({
  selector: 'app-fill-password',
  templateUrl: './fill-password.component.html',
  styleUrls: ['./fill-password.component.css']
})
export class FillPasswordComponent implements OnInit {
  @Input() emailFilled:string;
  constructor(private logInService: LogInService) {
  }

  ngOnInit() {
  }

  onFillPassword(form: NgForm){
    const formPass = form.value;
    this.logInService.passEmit.next(formPass.password);
  }

  onChooseAnother(){
    this.logInService.emailEmit.next(null);
  }
}
