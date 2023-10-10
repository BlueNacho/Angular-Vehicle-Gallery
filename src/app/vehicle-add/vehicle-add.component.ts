import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent {
  vehicle: Vehicle = {
    id: 0,
    image: '',
    model: '',
    description: '',
    type: ''
  };

  constructor(
    private vehicleService: VehicleService,
    private location: Location
    ) { }

  addVehicle(): void {
    this.vehicleService.addVehicle(this.vehicle);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
