import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageTempComponent } from './front-page-temp.component';

describe('FrontPageTempComponent', () => {
  let component: FrontPageTempComponent;
  let fixture: ComponentFixture<FrontPageTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
