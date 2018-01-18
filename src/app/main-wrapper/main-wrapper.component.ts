import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  events = [];
  opened = false;
  mobileQuery: MediaQueryList;
  title = "Valencia Summit Seals"
  navbar = [
    { name: 'Home', url: "/index" },
    { name: 'Create Account', url: "/createaccount" },
    { name: 'Registration', url: "/registration" },
    { name: 'About Us', url: "/about" }]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef:ChangeDetectorRef, media:MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width:600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }

}
