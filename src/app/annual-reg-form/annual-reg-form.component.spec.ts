import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualRegFormComponent } from './annual-reg-form.component';

describe('AnnualRegFormComponent', () => {
  let component: AnnualRegFormComponent;
  let fixture: ComponentFixture<AnnualRegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualRegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
