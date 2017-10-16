import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          {optional: true}),
        // move page off screen right on leave
        query(':leave',
          animate('1000ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional: true}),
        // move page in screen from left to right
        query(':enter',
          animate('1000ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional: true}),
      ])
    ])
  ]
})
export class AppComponent  {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    console.log(fireAuth);
  }
  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
