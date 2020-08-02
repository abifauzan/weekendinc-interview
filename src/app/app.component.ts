import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Aos from 'aos';

import { ApiService } from './api.service';
import { HelpTips, Testimonial } from './models';
import { Observable } from 'rxjs';
import { tap, publishReplay, refCount, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // dataHelpTips: HelpTips[] = [];
  dataHelpTips$: Observable<HelpTips[]>;
  dataTestimonials$: Observable<Testimonial[]>;

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

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });

    // this.api.getHelpTips()
    // .subscribe((res: any) => {
    //   console.log(res);
    // });
    this.getHelpTips();
    this.getTestimonials();
  }

  getHelpTips(): void {
    this.dataHelpTips$ = this.api.getHelpTips().pipe(
      tap(_ => console.log('fetched help-tips'))
    ) as Observable<HelpTips[]>;
  }

  getTestimonials(): void {
    this.dataTestimonials$ = this.api.getTestimonials().pipe(
      tap(_ => console.log('Fetched testimonials'))
    ) as Observable<Testimonial[]>;
  }

}
