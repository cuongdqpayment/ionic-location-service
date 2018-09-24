import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()

export class LocationService{

    locOptions={
        enableHighAccuracy: false,
        timeout: 3000, //timeout phai lon hon tuoi tho
        maximumAge: 1000
      };

    constructor(private loc:Geolocation){}
    getCurrentLoc(){
        //lay vi tri hien tai tra ve la mot Promise
        //xem xu ly promise nhu the nao nhe
        return this.loc.getCurrentPosition(this.locOptions);
    }

    trackingLoc(){
        //goi phuong thuc nay se khoi tao mot tien trinh theo doi vi tri
        return this.loc.watchPosition(this.locOptions);
        //dang ky mot su kien de lay du lieu tra ve
        // this.watchLoc.subscribe((data) => {
        //     // data can be a set of coordinates, or an error (if an error occurred).
        //     // data.coords.latitude
        //     // data.coords.longitude
        //     console.log('Data watch: ' +  data.coords.latitude + ',' + data.coords.longitude);
        //   });
        //De stop thi unsubscribe no se khong hoat dong nua
    }

}
