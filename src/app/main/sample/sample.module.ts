import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import {MatCardModule} from "@angular/material";
import {HeartbeatModule} from "../heartbeat/heartbeat.module";
import {AuthGuard} from "../guards/auth.guard";
import {RateGlucoseModule} from "../rate-glucose/rate-glucose.module";

const routes = [
    {
        path     : '',
        canActivate: [AuthGuard],
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        MatCardModule,

        HeartbeatModule,
        RateGlucoseModule,

        FuseSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
