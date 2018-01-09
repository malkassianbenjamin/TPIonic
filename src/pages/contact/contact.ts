import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(private navCtrl: NavController,
              private geolocation: Geolocation,
              private googleMaps: GoogleMaps) {}

  ngAfterViewInit(){
    this.initMap();
  }

  initMap(){
    let element = this.mapElement.nativeElement;
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create(element, mapOptions);
    console.log(this.map);
  }
}
