import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationService } from '../../services/location-service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../../models/Location.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  locTracked:Subscription;
  locCur:Location = new Location();
  locMove:Location = new Location();
  


  constructor(public navCtrl: NavController, private loc: LocationService) { }

  //ham nay se chay sau khi contructor khoi tao xong
  ngOnInit() {
    //lay vi tri theo dich vu vi tri da khai bao
    // this.getLocation();
    // //theo doi thay doi vi tri cua thiet bi
    // this.locTracked = this.trackingLocation();

    // setTimeout(()=>{
    //   this.stopTracking()
    //   },10000)
    this.locCur = new Location();
    this.locMove = new Location();
  }

  getLocation() {
    this.loc.getCurrentLoc()
    .then(pos => {
      //console.log("loc="+pos.coords.latitude+","+pos.coords.longitude);
      this.locCur.accuracy = pos.coords.accuracy;
      this.locCur.lat = pos.coords.latitude;
      this.locCur.lon = pos.coords.longitude;
      this.locCur.altitude = pos.coords.altitude;
      this.locCur.altitudeAccuracy = pos.coords.altitudeAccuracy;
      this.locCur.heading = pos.coords.heading;
      this.locCur.speed = pos.coords.speed;
      //this.locCur.timestamp = pos.timestamp;
    })
    .catch(err => console.log('Loi: ' + err))
  }

  trackingLocation(){
   return this.loc.trackingLoc()
    .subscribe(pos => {
      //console.log("vi tri thay doi="+p.coords.latitude+","+p.coords.longitude);
      this.locMove.count++;
      this.locMove.accuracy = pos.coords.accuracy;
      this.locMove.lat = pos.coords.latitude;
      this.locMove.lon = pos.coords.longitude;
      this.locMove.altitude = pos.coords.altitude;
      this.locMove.altitudeAccuracy = pos.coords.altitudeAccuracy;
      this.locMove.heading = pos.coords.heading;
      this.locMove.speed = pos.coords.speed;
      //this.locMove.timestamp = pos.timestamp;
      
    },err=> console.log("Loi Tracking: " + err))
  }

  stopTracking(){
    console.log("stop tracking!");
    this.locTracked.unsubscribe();
  }

}
