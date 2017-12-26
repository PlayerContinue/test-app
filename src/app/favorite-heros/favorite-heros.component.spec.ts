import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHerosComponent } from './favorite-heros.component';

describe('FavoriteHerosComponent', () => {
  let component: FavoriteHerosComponent;
  let fixture: ComponentFixture<FavoriteHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
