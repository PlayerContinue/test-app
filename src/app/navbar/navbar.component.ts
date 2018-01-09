import { Component, OnInit } from '@angular/core';
import { PageListing } from '../_Objects/pageListing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string =  "Valencia Summit Seals";
  pages: PageListing[] = [
    { name: 'Home', url: "/index" },
    { name: 'Create Account', url: "/createaccount" },
    { name: 'Registration', url: "/registration" },
    { name: 'About Us', url: "/about" }];

  constructor(private route:Router) { }

  ngOnInit() {
  }

  private isSelectedLink(link:PageListing):string{
    var classes = "nav-item";
    if(this.route.url === link.url){
      classes += " active";
    }
    return classes;
  }

}
