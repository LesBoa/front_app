import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { StockComponent } from './stock.component';
import {MatCardModule, MatTableModule} from "@angular/material";
import {HeartbeatModule} from "../heartbeat/heartbeat.module";
import {AuthGuard} from "../guards/auth.guard";

import { LogbookService } from 'app/main/logbook/logbook.service';
import { StockService } from 'app/main/stock/stock.service';

const routes = [
    {
        path     : 'stock',
        component: StockComponent
    }
];

@NgModule({
    declarations: [
        StockComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        MatCardModule,

        FuseSharedModule,
        MatTableModule,
    ],
    exports     : [
        StockComponent
    ],
    providers: [
        StockService,
        
    ]
})

export class StockModule
{
}
