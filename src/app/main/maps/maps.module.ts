import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapsComponent} from "./maps.component";
import {FuseSharedModule} from "../../../@fuse/shared.module";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [
      MapsComponent
  ],
  imports: [
    CommonModule,
      FuseSharedModule,
      BrowserModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAyK18ivuOClE_wRJVaMCot3CdPrho9z-4'
      }),
      MatCardModule
  ],
    exports: [
        MapsComponent
    ]
})
export class MapsModule { }
