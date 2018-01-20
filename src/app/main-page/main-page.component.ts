import { Component, OnInit } from '@angular/core';
import {MobileChecker} from "../_Services/mobile-checker.service";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  private _mobileQueryListener: () => void;

  constructor(mobileChecker:MobileChecker) {
    

   }

  ngOnInit() {
  }

}
