"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var messages_component_1 = require("./messages/messages.component");
var app_routing_module_1 = require(".//app-routing.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var hero_search_component_1 = require("./hero-search/hero-search.component");
var favorite_heros_component_1 = require("./favorite-heros/favorite-heros.component");
var sizer_component_component_1 = require("./sizer-component/sizer-component.component");
var main_page_component_1 = require("./main-page/main-page.component");
var registration_component_1 = require("./registration/registration.component");
var navbar_component_1 = require("./navbar/navbar.component");
var create_account_component_1 = require("./create-account/create-account.component");
var dynamic_form_question_component_1 = require("./dynamic-form-question/dynamic-form-question.component");
var log_service_1 = require("./_Services/log.service");
var message_service_1 = require("./_Services/message.service");
var hero_service_1 = require("./hero.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                messages_component_1.MessagesComponent,
                dashboard_component_1.DashboardComponent,
                hero_search_component_1.HeroSearchComponent,
                favorite_heros_component_1.FavoriteHerosComponent,
                sizer_component_component_1.SizerComponent,
                main_page_component_1.MainPageComponent,
                registration_component_1.RegistrationComponent,
                navbar_component_1.NavbarComponent,
                create_account_component_1.CreateAccountComponent,
                dynamic_form_question_component_1.DynamicFormQuestionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_2.ReactiveFormsModule,
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false })
            ],
            providers: [hero_service_1.HeroService, message_service_1.MessageService, log_service_1.LogService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map