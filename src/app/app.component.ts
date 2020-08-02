import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

}
