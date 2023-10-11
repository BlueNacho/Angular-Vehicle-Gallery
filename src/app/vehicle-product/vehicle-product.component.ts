import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  favourite: boolean = false;

  @Output() favouriteChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite() {
    this.favourite = !this.favourite;
    this.favouriteChange.emit(this.favourite);
  }
}
    
