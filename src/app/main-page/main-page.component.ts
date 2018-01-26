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
  new EventData ({title: `Nav Item ${i + 1}`/*, img: 'assets/img/test.png'*/, date: 'March 26,2018'}));


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = new MobileChecker(changeDetectorRef, media);
  }

  ngOnInit() {
  }

}
