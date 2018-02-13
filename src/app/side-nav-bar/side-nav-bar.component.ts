import { Component, OnInit, Input } from '@angular/core';
import { PageListing } from '../_Objects/pageListing';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  @Input() pages: PageListing[];
  constructor() { }

  ngOnInit() {
  }

}
