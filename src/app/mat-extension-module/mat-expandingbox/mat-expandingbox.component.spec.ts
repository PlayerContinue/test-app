import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpandingBoxComponent } from './mat-expandingbox.component';

describe('MatExpandingfourcomponentComponent', () => {
  let component: MatExpandingBoxComponent;
  let fixture: ComponentFixture<MatExpandingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatExpandingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExpandingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
