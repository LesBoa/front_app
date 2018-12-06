import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'heartbeat',
    templateUrl  : './heartbeat.component.html',
    styleUrls    : ['./heartbeat.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeartbeatComponent
{
    public bpm = 65;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
