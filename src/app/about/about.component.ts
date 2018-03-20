import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  summithoalink = 'https://www.valenciasummithoa.org/';

  constructor() { }

  ngOnInit() {
  }

}
