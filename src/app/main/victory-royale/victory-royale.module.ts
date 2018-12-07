import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { VictoryRoyaleComponent } from './victory-royale.component';
import {AuthGuard} from '../guards/auth.guard';

const routes = [
    {
        path     : 'victory-royale',
        component: VictoryRoyaleComponent,
    }
];

@NgModule({
    declarations: [
        VictoryRoyaleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
    ],
    exports     : [
        VictoryRoyaleComponent
    ]
})

export class VictoryRoyaleModule
{
}
