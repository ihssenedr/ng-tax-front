import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCounterComponent } from './tax-counter.component';

describe('TaxCounterComponent', () => {
  let component: TaxCounterComponent;
  let fixture: ComponentFixture<TaxCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
