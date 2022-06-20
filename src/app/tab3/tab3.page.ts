import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
    this.appService.MarketGetData('/healthtips/').subscribe(
      (data) => {
        this.medicine = data;
        if (data.length === 0) {
          this.appService.presentAlert('', 'There are no health tips in the system yet!', '');
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
