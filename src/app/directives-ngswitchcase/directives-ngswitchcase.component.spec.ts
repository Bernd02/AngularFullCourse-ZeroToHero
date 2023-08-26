import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgswitchcaseComponent } from './directives-ngswitchcase.component';

describe('DirectivesNgswitchcaseComponent', () => {
  let component: DirectivesNgswitchcaseComponent;
  let fixture: ComponentFixture<DirectivesNgswitchcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesNgswitchcaseComponent]
    });
    fixture = TestBed.createComponent(DirectivesNgswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
