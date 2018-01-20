import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MobileChecker } from '../_Objects/mobile-checker';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  opened = false;
  title = 'Valencia Summit Seals';
  mobileQuery: MobileChecker;
  navbar = [
    { name: 'Home', url: '/index' },
    { name: 'Create Account', url: '/createaccount' },
    { name: 'Registration', url: '/registration' },
    { name: 'About Us', url: '/about' }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = new MobileChecker(changeDetectorRef, media);
   }

  ngOnInit() {
  }

  onNgDestroy() {
    this.mobileQuery.Destroy();
  }
}
