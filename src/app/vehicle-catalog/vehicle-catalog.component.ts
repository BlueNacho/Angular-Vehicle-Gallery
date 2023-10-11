import { Component } from '@angular/core';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-catalog',
  templateUrl: './vehicle-catalog.component.html',
  styleUrls: ['./vehicle-catalog.component.scss']
})
export class VehicleCatalogComponent {
  constructor(private vehicleService: VehicleService) { }

  vehicles: Vehicle[] = [];  
  favouriteCount: number = this.vehicleService.favouriteCount;

  ngOnInit(): void {
    this.getVehicles()
  }

  getVehicles(): void {
    this.vehicles = this.vehicleService.getVehicles();
  }

  recieveFavouriteChange($event: boolean) {
    this.favouriteCount = this.vehicleService.favouriteCounter($event);
  }
}
