import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpandingBoxWrapperComponent } from './mat-expandingboxwrapper.component';

describe('MatExpandingboxwrapperComponent', () => {
  let component: MatExpandingBoxWrapperComponent;
  let fixture: ComponentFixture<MatExpandingBoxWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatExpandingBoxWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExpandingBoxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
