import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopvegeComponent } from './shopvege.component';

describe('ShopvegeComponent', () => {
  let component: ShopvegeComponent;
  let fixture: ComponentFixture<ShopvegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopvegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopvegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
