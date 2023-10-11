import { Injectable } from '@angular/core';

import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  favouriteCount: number = 0;

  constructor() { }

  getVehicles(): Vehicle[] {
    return VEHICLES;
  } 

  getVehicle(id: number): Vehicle{
    const vehicle = VEHICLES.find(v => v.id === id);
    return vehicle ? vehicle : VEHICLES[0]; 
  } 

  addVehicle(vehicle: Vehicle): void {
    vehicle.id = VEHICLES.length + 1;
    VEHICLES.push(vehicle);
  }

  removeVehicle(id: number): void {
    const index = VEHICLES.findIndex(v => v.id === id);
    if (index >= 0) {
      VEHICLES.splice(index, 1);
    }
  }

  favouriteCounter($event: boolean): number {
    $event ? this.favouriteCount++ : this.favouriteCount--;
    return this.favouriteCount;
  }
}
