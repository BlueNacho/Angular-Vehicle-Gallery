import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.scss']
})
export class VehicleManagementComponent {
    vehicle: Vehicle = {
      id: 0,
      image: '',
      model: '',
      description: '',
      type: ''
    };

    constructor(
      private route: ActivatedRoute,
      private vehicleService: VehicleService,
      private location: Location
      ) { }

    ngOnInit(): void {
      this.getVehicle();
    }

    getVehicle(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.vehicle = this.vehicleService.getVehicle(id);
    }

    removeVehicle(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.vehicleService.removeVehicle(id);
      this.goBack();
    }

    goBack(): void {
      this.location.back();
    }
}
