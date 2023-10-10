import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleProductComponent } from './vehicle-product.component';

describe('VehicleProductComponent', () => {
  let component: VehicleProductComponent;
  let fixture: ComponentFixture<VehicleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleProductComponent]
    });
    fixture = TestBed.createComponent(VehicleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
