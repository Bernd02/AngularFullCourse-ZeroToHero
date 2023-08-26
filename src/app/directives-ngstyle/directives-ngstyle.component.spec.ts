import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgstyleComponent } from './directives-ngstyle.component';

describe('DirectivesNgstyleComponent', () => {
  let component: DirectivesNgstyleComponent;
  let fixture: ComponentFixture<DirectivesNgstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesNgstyleComponent]
    });
    fixture = TestBed.createComponent(DirectivesNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
