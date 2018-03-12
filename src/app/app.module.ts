import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
} from '@angular/material';
import { MatExtensionModule } from './mat-extension-module/mat-extension.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FavoriteHerosComponent } from './favorite-heros/favorite-heros.component';
import { SizerComponent } from './sizer-component/sizer-component.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { AboutComponent } from './about/about.component';


import { LogService } from './_Services/log.service';
import { MessageService } from './_Services/message.service';
import { HeroService } from './hero.service';
import { EventServices } from './_Services/eventService.service';
import {URLListService} from './_Services/urlListService.service';
import {ApiDataService} from './_Services/apiDataService.service';
import {LoadingBarModule} from './loadingbar/loading-bar.module';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { ScrollingPanelComponent } from './scrolling-panel/scrolling-panel.component';
import { ScrollingTableComponent } from './scrolling-table/scrolling-table.component';
import { EventRowComponent } from './event-row/event-row.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventMoreDetailsComponent } from './event-more-details/event-more-details.component';


@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        FavoriteHerosComponent,
        SizerComponent,
        MainPageComponent,
        RegistrationComponent,
        NavbarComponent,
        CreateAccountComponent,
        DynamicFormQuestionComponent,
        AboutComponent,
        DynamicFormComponent,
        MainWrapperComponent,
        SideNavBarComponent,
        ScrollingPanelComponent,
        ScrollingTableComponent,
        EventRowComponent,
        EventListComponent,
        EventMoreDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        /*HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),*/
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        MatExtensionModule,
        LoadingBarModule

    ],
    providers: [
        HeroService,
        MessageService,
        LogService,
        EventServices,
        URLListService,
        ApiDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
