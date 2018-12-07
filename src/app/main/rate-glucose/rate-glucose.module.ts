import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PieChartModule} from "@swimlane/ngx-charts";
import {RateGlucoseComponent} from "./rate-glucose.component";
import {MatCardModule} from "@angular/material";
import {FuseSharedModule} from "../../../@fuse/shared.module";

@NgModule({
  declarations: [
      RateGlucoseComponent
  ],
  imports: [
    CommonModule,
      PieChartModule,
      FuseSharedModule,
      MatCardModule,
  ],
  exports: [
      RateGlucoseComponent
  ]
})
export class RateGlucoseModule { }
