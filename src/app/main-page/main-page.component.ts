import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MobileChecker } from '../_Objects/mobile-checker';
import { MediaMatcher } from '@angular/cdk/layout';
import { URLListService } from '../_Services/urlListService.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mobileQuery: MobileChecker;
  urlList: URLListService;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private list: URLListService) {
    this.urlList = list;
    this.mobileQuery = new MobileChecker(changeDetectorRef, media);
  }

  ngOnInit() {
  }

}
