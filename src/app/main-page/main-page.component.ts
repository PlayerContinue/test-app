import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MobileChecker } from '../_Objects/mobile-checker';
import {EventData} from '../_Objects/eventData';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mobileQuery: MobileChecker;
  temp = Array(50).fill(0).map((_, i) =>
  new EventData ({title: `Nav Item ${i + 1}`, img: 'assets/img/90px.jpg',
  startDate: this.randomDate(new Date(2012, 0, 1), new Date()),
  endDate: this.randomDate(new Date(2012, 0, 1), new Date())}));


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = new MobileChecker(changeDetectorRef, media);
  }

  ngOnInit() {
  }

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

}
