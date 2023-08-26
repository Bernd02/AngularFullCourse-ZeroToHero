import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTaskComponent } from './directives-task.component';

describe('DirectivesTaskComponent', () => {
  let component: DirectivesTaskComponent;
  let fixture: ComponentFixture<DirectivesTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesTaskComponent]
    });
    fixture = TestBed.createComponent(DirectivesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
