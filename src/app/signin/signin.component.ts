import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';
import { AuthService } from '../components/services/auth.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component(
  { selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    providers: [AuthService]
})
export class SigninComponent implements OnInit {
  email= '';
  password= '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signin() {
    console.log(this.email + '-' + this.password);
    this.auth.signin(this.email, this.password).subscribe((response) => {
      console.log('signin response', response);
      Globals.setUser(response);
       this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
    });
  }
}
