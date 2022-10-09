import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvegeComponent } from './addvege.component';

describe('AddvegeComponent', () => {
  let component: AddvegeComponent;
  let fixture: ComponentFixture<AddvegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
