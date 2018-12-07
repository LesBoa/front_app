import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateGlucoseComponent } from './rate-glucose.component';

describe('RateGlucoseComponent', () => {
  let component: RateGlucoseComponent;
  let fixture: ComponentFixture<RateGlucoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateGlucoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateGlucoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
