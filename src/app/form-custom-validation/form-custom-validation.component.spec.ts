import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomValidationComponent } from './form-custom-validation.component';

describe('FormCustomValidationComponent', () => {
  let component: FormCustomValidationComponent;
  let fixture: ComponentFixture<FormCustomValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCustomValidationComponent]
    });
    fixture = TestBed.createComponent(FormCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
