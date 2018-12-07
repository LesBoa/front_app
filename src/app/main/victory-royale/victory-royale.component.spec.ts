import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryRoyaleComponent } from './victory-royale.component';

describe('VictoryRoyaleComponent', () => {
  let component: VictoryRoyaleComponent;
  let fixture: ComponentFixture<VictoryRoyaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoryRoyaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoryRoyaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
