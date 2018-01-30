﻿import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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



  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = new MobileChecker(changeDetectorRef, media);
  }

  ngOnInit() {
  }

}
