import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMoreDetailsComponent } from './event-more-details.component';

describe('EventMoreDetailsComponent', () => {
  let component: EventMoreDetailsComponent;
  let fixture: ComponentFixture<EventMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
