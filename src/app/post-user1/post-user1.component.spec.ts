import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUser1Component } from './post-user1.component';

describe('ServiceUser1Component', () => {
  let component: ServiceUser1Component;
  let fixture: ComponentFixture<ServiceUser1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceUser1Component]
    });
    fixture = TestBed.createComponent(ServiceUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
