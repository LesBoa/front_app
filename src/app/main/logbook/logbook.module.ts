import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { LogbookComponent } from './logbook.component';
import {MatCardModule, MatTableModule} from "@angular/material";
import {HeartbeatModule} from "../heartbeat/heartbeat.module";
import {AuthGuard} from "../guards/auth.guard";

import { LogbookService } from 'app/main/logbook/logbook.service';
import { StockService } from 'app/main/stock/stock.service';

const routes = [
    {
        path     : 'logbook',
        component: LogbookComponent
    }
];

@NgModule({
    declarations: [
        LogbookComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        MatCardModule,

        FuseSharedModule,
        MatTableModule,
    ],
    exports     : [
        LogbookComponent
    ],
    providers: [LogbookService,
        
    ]
})

export class LogbookModule
{
}
