import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule, MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import { SampleModule } from './main/sample/sample.module';
import {LoginModule} from "./main/pages/login/login.module";
import {RegisterModule} from "./main/pages/register/register.module";
import {RateGlucoseComponent} from './main/rate-glucose/rate-glucose.component';
import {JwtInterceptor} from "./main/helpers/jwt.interceptor";
import { VictoryRoyaleModule } from './main/victory-royale/victory-royale.module';
import { MapsComponent } from './main/maps/maps.component';
import {MapsModule} from "./main/maps/maps.module";


import { LogbookService } from 'app/main/logbook/logbook.service';
import { StockService } from 'app/main/stock/stock.service';
import { StockModule } from './main/stock/stock.module';
import { LogbookModule } from './main/logbook/logbook.module';


const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        LoginModule,
        RegisterModule,
        MapsModule,
        VictoryRoyaleModule,
        LogbookModule,
        StockModule

    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        LogbookService,
        StockService,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}
