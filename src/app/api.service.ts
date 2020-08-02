import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HelpTips, Testimonial } from './models';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private helpTipsRecords$: Observable<HelpTips[]>;
  private testimonialRecords$: Observable<Testimonial[]>;

  constructor(
    private http: HttpClient
  ) { }

  getHelpTips(): Observable<HelpTips[]> {
    if (!this.helpTipsRecords$) {
      this.helpTipsRecords$ = this.http
        .get<HelpTips[]>(`${environment.baseUrl}/help-tips`)
        .pipe(shareReplay({ bufferSize: 1, refCount: true}));
    }
    return this.helpTipsRecords$;
  }

  getTestimonials(): Observable<Testimonial[]> {
    if (!this.testimonialRecords$) {
      this.testimonialRecords$ = this.http
        .get<Testimonial[]>(`${environment.baseUrl}/testimonial`)
        .pipe(shareReplay({ bufferSize: 1, refCount: true}));
    }
    return this.testimonialRecords$;
  }


}
