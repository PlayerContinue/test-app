import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  summithoalink: string = "https://www.valenciasummithoa.org/";
  sealsemail:string =  "valenciasummitseals@gmail.com";
  sealsphone:string = "(802) 64-SEALS, or 802-647-3257";

  constructor() { }

  ngOnInit() {
  }

}
