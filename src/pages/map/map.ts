import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') map;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MapPage Page');

    let mapEle = this.map.nativeElement; //document.getElementById('map');

    let map = new google.maps.Map(mapEle, {
      center: { lat: 43.071584, lng: -89.380120 },
      zoom: 16
    });

    /*
    mapData.forEach(markerData => {
      let infoWindow = new google.maps.InfoWindow({
        content: `<h5>${markerData.name}</h5>`
      });

      let marker = new google.maps.Marker({
        position: markerData,
        map: map,
        title: markerData.name
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
    */

    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });

  }

}
