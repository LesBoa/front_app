import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    longitude = 11.288452;
    latitude = 23.806078;

    markers = [
        { latitude: 23.806078, longitude: 11.288452 }
    ];

    placeMarker(position: any) {
        const lat = position.coords.lat;
        const lng = position.coords.lng;

        this.markers.push({ latitude: lat, longitude: lng });
    }
    constructor() {

    }

    ngOnInit() {

    }

}
