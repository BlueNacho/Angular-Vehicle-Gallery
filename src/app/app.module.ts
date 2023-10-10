import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleCatalogComponent } from './vehicle-catalog/vehicle-catalog.component';
import { VehicleProductComponent } from './vehicle-product/vehicle-product.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleCatalogComponent,
    VehicleProductComponent,
    VehicleManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
