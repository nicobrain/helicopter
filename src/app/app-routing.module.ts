import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HelicoptersComponent} from "./helicopters/helicopters.component";
import {SightseeingFlightsComponent} from "./sightseeing-flights/sightseeing-flights.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'helicopter', component: HelicoptersComponent},
  {path: 'sightseeing', component: SightseeingFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
