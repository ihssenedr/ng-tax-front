import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxesComponent } from './containers/taxes/taxes.component';
import {TaxesService} from "./services/taxes.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineentryComponent } from './components/timelineentry/timelineentry.component';
import { TaxCounterComponent } from './components/tax-counter/tax-counter.component';

const routes: Routes = [
  {
    path : '' ,
    component : TaxesComponent
  },
  {
    path : 'timeline' ,
    component : TimelineComponent
  },
  {
    path : 'taxCounter' ,
    component : TaxCounterComponent
  },
];

@NgModule({
  declarations: [
    TaxesComponent,
    TimelineComponent,
    TimelineentryComponent,
    TaxCounterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [TaxesService],
})
export class TaxesModule { }
