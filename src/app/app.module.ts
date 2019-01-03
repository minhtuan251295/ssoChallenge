import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FillEmailComponent } from './fill-email/fill-email.component';
import { FillPasswordComponent } from './fill-password/fill-password.component';

import { LogInService } from './service/login.service';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FillEmailComponent,
    FillPasswordComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    
  ],
  providers: [LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
