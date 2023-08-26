import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindingTheoryComponent } from './two-way-data-binding-theory.component';

describe('TwoWayDataBindingTheoryComponent', () => {
  let component: TwoWayDataBindingTheoryComponent;
  let fixture: ComponentFixture<TwoWayDataBindingTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayDataBindingTheoryComponent]
    });
    fixture = TestBed.createComponent(TwoWayDataBindingTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
