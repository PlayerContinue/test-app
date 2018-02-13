import { Component, OnInit, Input } from '@angular/core';
import { PageListing } from '../_Objects/pageListing';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title = 'Valencia Summit Seals';
  @Input() pages: PageListing[];

  constructor() { }

  ngOnInit() {
  }

}
