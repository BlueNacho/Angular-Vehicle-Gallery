import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleCatalogComponent } from './vehicle-catalog/vehicle-catalog.component';
import { VehicleProductComponent } from './vehicle-product/vehicle-product.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleCatalogComponent,
    VehicleProductComponent,
    VehicleManagementComponent,
    VehicleAddComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
