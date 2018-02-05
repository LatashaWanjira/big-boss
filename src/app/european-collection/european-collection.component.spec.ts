import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeanCollectionComponent } from './european-collection.component';

describe('EuropeanCollectionComponent', () => {
  let component: EuropeanCollectionComponent;
  let fixture: ComponentFixture<EuropeanCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeanCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeanCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
