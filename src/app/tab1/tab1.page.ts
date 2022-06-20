import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  searchText: any;
  loading: any;
  medicine = [];

  latitude: any;
  longitude: any;
  address: any;

  country: any;
  city: any;
  province: any;
  location: any;

  constructor(
    private appService: ApiService,
    private nativeGeocoder: NativeGeocoder
  ) {}

  ngOnInit(): void {
    this.getLocation();
    // this.getMedicine();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log('position', position);
    this.getLocationDetails(position.coords.latitude, position.coords.longitude);
    this.getMedicine();
  }

  getLocationDetails(latitude, longitude) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]))
        this.address = JSON.stringify(result[0]);
        this.city = result[0]['locality'];
        this.location = result[0]['subLocality'];
        this.province = result[0]['administrativeArea'];
        this.country = result[0]['countryName'];
      }
      )
      .catch((error: any) => console.log(error));
  }

  getMedicine() {
    this.loading = true;
    this.appService.MarketGetData('/medicine/').subscribe(
      (data) => {
        this.medicine = data;
        if (data.length === 0) {
          this.appService.presentAlert('', 'There are no medicines in the system yet!', '');
        }
        this.loading = false;
      },
      (err) => {
        this.appService.presentAlert(err.title, 'Failed to retrive data!', 'An error occured while retrieving data');
        this.loading = false;
      }
    );
  }

  postData(user){


  const userData =   {
      "name": user.product_name,
      "city": this.city,
      "location": this.location,
      "province": this.province,
      "country": this.country,
      "latitude": this.latitude,
      "longitude": this.longitude
  }
    this.appService.MarketPostData('/drugsearch/results/new/', userData).subscribe(
      (data) => {
        console.log('data', data);
        
      },
      (err) => {
        this.appService.presentAlert(err.title, 'Failed to save data!', 'An error occured while saving data');
      }
    );
  }

}
