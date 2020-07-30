import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  slides = 10;

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
    margin: 10,
    // autoWidth: true,
    stagePadding: 50,
    // startPosition: 1,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
    nav: true,
    navText: ['<div class="nav-btn prev-slide"></div>', '<div class="nav-btn next-slide"></div>'],
  };

}
