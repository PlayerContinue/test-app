import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
@Component({
  selector: 'app-favorite-heros',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <ul>
      <li *ngFor="let hero of heroes">
         {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    `,
  styleUrls: ['./favorite-heros.component.css']
})
export class FavoriteHerosComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    
  ];
  myHero = this.heroes[0];
  constructor() { }

  ngOnInit() {
  }

}
