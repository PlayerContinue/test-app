import { Component, OnInit } from '@angular/core';
import { MobileChecker } from '../_Objects/mobile-checker';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  temp = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);


  constructor() {

  }

  ngOnInit() {
  }

}
