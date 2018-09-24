import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationService } from '../../services/location-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  locTracked:Subscription;

  constructor(public navCtrl: NavController, private loc: LocationService) { }

  //ham nay se chay sau khi contructor khoi tao xong
  ngOnInit() {
    //lay vi tri theo dich vu vi tri da khai bao
    this.getLocation();
    //theo doi thay doi vi tri cua thiet bi
    this.locTracked = this.trackingLocation();

    setTimeout(()=>{
      this.stopTracking()
      },10000)
  }

  getLocation() {
    this.loc.getCurrentLoc()
    .then(pos => {
      console.log("loc="+pos.coords.latitude+","+pos.coords.longitude);
    })
    .catch(err => console.log(err))
  }

  trackingLocation(){
   return this.loc.trackingLoc()
    .subscribe(p => {
      console.log("vi tri thay doi="+p.coords.latitude+","+p.coords.longitude);
    },err=> console.log("Err: " + err))
  }

  stopTracking(){
    console.log("stop tracking!");
    this.locTracked.unsubscribe();
  }




}
