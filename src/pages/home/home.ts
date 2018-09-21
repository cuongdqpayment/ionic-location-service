import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loc: Geolocation;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('Toa do lay duoc la: ' +  resp.coords.latitude + ',' + resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();

    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log('Data watch: ' +  data.coords.latitude + ',' + data.coords.longitude);
    });

  }



}
