import { Component, Input } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-product',
  templateUrl: './vehicle-product.component.html',
  styleUrls: ['./vehicle-product.component.scss']
})
export class VehicleProductComponent {
  @Input() vehicle: Vehicle = {
    id: 0,
    image: '',
    model: '',
    description: '',
    type: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
}
    
