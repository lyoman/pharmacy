/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.page.html',
  styleUrls: ['./view-medicine.page.scss'],
})
export class ViewMedicinePage implements OnInit {

  medicine = {
    product_name: this.route.snapshot.paramMap.get('product_name'),
    productprice: this.route.snapshot.paramMap.get('productprice'),
    description: this.route.snapshot.paramMap.get('description'),
    quantity: this.route.snapshot.paramMap.get('quantity'),
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('route', this.route);
  }

}
