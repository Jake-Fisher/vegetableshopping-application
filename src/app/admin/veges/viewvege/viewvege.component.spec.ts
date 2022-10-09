import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvegeComponent } from './viewvege.component';

describe('ViewvegeComponent', () => {
  let component: ViewvegeComponent;
  let fixture: ComponentFixture<ViewvegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
