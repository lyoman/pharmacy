import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMedicinePage } from './view-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMedicinePageRoutingModule {}
