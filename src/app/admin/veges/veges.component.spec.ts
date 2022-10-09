import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegesComponent } from './veges.component';

describe('VegesComponent', () => {
  let component: VegesComponent;
  let fixture: ComponentFixture<VegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
