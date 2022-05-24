import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineentryComponent } from './timelineentry.component';

describe('TimelineentryComponent', () => {
  let component: TimelineentryComponent;
  let fixture: ComponentFixture<TimelineentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
