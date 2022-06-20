import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchText: any;
  loading: any;
  medicine:any = [];

  latitude: any;
  longitude: any;
  address: any;

  constructor(
    private appService: ApiService,
  ) {}

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine() {
    this.loading = true;
    this.appService.MarketGetData('/pharmacies/').subscribe(
      (data) => {
        this.medicine = data['results'];
        if (data.length === 0) {
          this.appService.presentAlert('', 'There are no pharmacies in the system yet!', '');
        }
        this.loading = false;
      },
      (err) => {
        this.appService.presentAlert(err.title, 'Failed to retrive data!', 'An error occured while retrieving data');
        this.loading = false;
      }
    );
  }

}
