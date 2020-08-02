import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Aos from 'aos';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounceDiv', [
      state('initial', style({
        backgroundColor: '#0b24fb'
      })),
      state('final', style({
        backgroundColor: '#0b24fb'
      })),
      transition('initial => final', [
        animate('1s', keyframes([
          style({ transform: 'scale(1,1) translateY(0)' }),
          style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
          style({ transform: 'scale(0.9, 1.1) translateY(-50px)' }),
          style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
          style({ transform: 'scale(1,1) translateY(-7px)' }),
          style({ transform: 'scale(1,1) translateY(0)' }),
        ]))
      ]),
      transition('final => initial', [
        animate('1s', keyframes([
          style({ transform: 'scale(1,1) translateY(0)' }),
          style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
          style({ transform: 'scale(0.9, 1.1) translateY(-50px)' }),
          style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
          style({ transform: 'scale(1,1) translateY(-7px)' }),
          style({ transform: 'scale(1,1) translateY(0)' }),
        ]))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  currentState = 'initial';

  customOptions: OwlOptions = {
    // stagePadding: 50,
    // loop: true,
    // center: true,
    items: 2,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    // margin: 10,
    // navSpeed: 700,
    // navText: ['left', 'right'],
    loop: true,
    margin: 12,
    // autoWidth: true,
    stagePadding: 50,
    // startPosition: 1,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true,
    navText: ['<div class="nav-btn prev-slide"></div>', '<div class="nav-btn next-slide"></div>'],
  };

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });
  }

  // tslint:disable-next-line: typedef
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
