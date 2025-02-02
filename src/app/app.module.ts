import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

// General
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

// Forms
import { FormsModule } from '@angular/forms';

// Import the Animations module

// Kendo
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// Bootstrap
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

// Components
import { HomeComponent } from './home/home.component';
import { BibleComponent } from './bible/bible.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BibleComponent,
        AboutComponent,
        PageNotFoundComponent,
        ServicesComponent,
    ],
    imports: [
        // General
        HttpClientModule,
        MDBBootstrapModulesPro.forRoot(),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,

        // Progress
        ButtonsModule,
        DropDownsModule,

        // Other
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAiAbCLneQWI-BWHQWntx4k-g76gYsemkg'
        }),

        DialogsModule
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
