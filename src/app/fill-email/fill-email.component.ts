import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInService } from '../service/login.service';

@Component({
  selector: 'app-fill-email',
  templateUrl: './fill-email.component.html',
  styleUrls: ['./fill-email.component.css']
})
export class FillEmailComponent implements OnInit {
  @ViewChild('fillEmail', { read: ElementRef }) email: ElementRef;
  constructor(private logInService: LogInService) { 
    
  }

  ngOnInit() {
    
  }
  

  onFillEmail(f:NgForm){
    const formEmail = f.value;
    this.logInService.emailEmit.next(formEmail.email);
  }

}
