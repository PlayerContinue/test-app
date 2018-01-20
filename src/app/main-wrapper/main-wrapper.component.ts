import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MobileChecker} from '../_Objects/mobile-checker';


@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  
  private _mobileQueryListener:() => void;
  
  opened = false;
  title = "Valencia Summit Seals"
  mobileQuery:MobileChecker;
  navbar = [
    { name: 'Home', url: "/index" },
    { name: 'Create Account', url: "/createaccount" },
    { name: 'Registration', url: "/registration" },
    { name: 'About Us', url: "/about" }]

  

  constructor(changeDetectorRef:ChangeDetectorRef) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
  }

}
