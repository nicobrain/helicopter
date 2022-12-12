import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HelicoptersComponent } from './helicopters/helicopters.component';
import { SightseeingFlightsComponent } from './sightseeing-flights/sightseeing-flights.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { BusinessFlightsComponent } from './business-flights/business-flights.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HelicoptersComponent,
    SightseeingFlightsComponent,
    BusinessFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
