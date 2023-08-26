import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgifNgforComponent } from './directives-ngif-ngfor.component';

describe('DirectivesNgifNgforComponent', () => {
  let component: DirectivesNgifNgforComponent;
  let fixture: ComponentFixture<DirectivesNgifNgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesNgifNgforComponent]
    });
    fixture = TestBed.createComponent(DirectivesNgifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
