"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Hero_1 = require("../Hero");
var FavoriteHerosComponent = /** @class */ (function () {
    function FavoriteHerosComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new Hero_1.Hero(1, 'Windstorm'),
            new Hero_1.Hero(13, 'Bombasto'),
        ];
        this.myHero = this.heroes[0];
    }
    FavoriteHerosComponent.prototype.ngOnInit = function () {
    };
    FavoriteHerosComponent = __decorate([
        core_1.Component({
            selector: 'app-favorite-heros',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My favorite hero is: {{myHero}}</h2>\n    <ul>\n      <li *ngFor=\"let hero of heroes\">\n         {{hero.name}}\n      </li>\n    </ul>\n    <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n    ",
            styleUrls: ['./favorite-heros.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FavoriteHerosComponent);
    return FavoriteHerosComponent;
}());
exports.FavoriteHerosComponent = FavoriteHerosComponent;
//# sourceMappingURL=favorite-heros.component.js.map