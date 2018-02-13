import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingPanelComponent } from './scrolling-panel.component';

describe('ScrollingPanelComponent', () => {
  let component: ScrollingPanelComponent;
  let fixture: ComponentFixture<ScrollingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
