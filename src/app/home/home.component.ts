import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signinFlag= false;
  signupFlag= false;
  form = 'col-lg-6 animated slideInRight box';
  form2 = 'col-lg-6 animated slideInLeft box';

  constructor() { }

  signin() {
    console.log('signing');
    this.form2 = 'col-lg-6 animated slideInLeft form';
    this.form = 'col-lg-6 animated slideInRight box';
    this.signinFlag = true;
    this.signupFlag = false;
  }
  signup() {
    console.log('signup');
    this.form = 'col-lg-6 animated slideInRight form';
    this.form2 = 'col-lg-6 animated slideInLeft box';
    this.signupFlag = true;
    this.signinFlag = false;
  }
  ngOnInit() {
  }

}
