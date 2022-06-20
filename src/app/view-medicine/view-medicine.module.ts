import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMedicinePageRoutingModule } from './view-medicine-routing.module';

import { ViewMedicinePage } from './view-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMedicinePageRoutingModule
  ],
  declarations: [ViewMedicinePage]
})
export class ViewMedicinePageModule {}
