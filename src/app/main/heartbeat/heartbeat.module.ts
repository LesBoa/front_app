import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';
import {HeartbeatComponent} from "./heartbeat.component";
import {MatCardModule} from "@angular/material";

@NgModule({
    declarations: [
        HeartbeatComponent
    ],
    imports: [
        RouterModule,
        FuseSharedModule,

        MatCardModule,
    ],
    exports: [
        HeartbeatComponent
    ]
})
export class HeartbeatModule {
}
