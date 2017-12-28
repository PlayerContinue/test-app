"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes/heroes.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var favorite_heros_component_1 = require("./favorite-heros/favorite-heros.component");
var main_page_component_1 = require("./main-page/main-page.component");
var registration_component_1 = require("./registration/registration.component");
var create_account_component_1 = require("./create-account/create-account.component");
var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'favorite', component: favorite_heros_component_1.FavoriteHerosComponent },
    { path: 'index', component: main_page_component_1.MainPageComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'createaccount', component: create_account_component_1.CreateAccountComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map