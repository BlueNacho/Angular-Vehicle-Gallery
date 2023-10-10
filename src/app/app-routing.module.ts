import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleCatalogComponent } from './vehicle-catalog/vehicle-catalog.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleCatalogComponent },
  { path: 'management/:id', component: VehicleManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
