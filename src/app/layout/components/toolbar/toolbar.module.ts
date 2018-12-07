import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { KonamiModule } from 'ngx-konami';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { PinataComponent } from '../pinata/pinata.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        PinataComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        KonamiModule,
    ],
    exports     : [
        ToolbarComponent,
    ]
})
export class ToolbarModule
{
}
