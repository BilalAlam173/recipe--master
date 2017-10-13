import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';

@Component(
  {    
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  show= true;

  constructor() { }

  showchange() {
    if ( this.show ) {
    this.show = false;
    }else {
      this.show = true;
    }
  }

  ngOnInit() {
  }

}
