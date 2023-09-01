import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPostListComponent } from './routing-post-list.component';

describe('RoutingPostListComponent', () => {
  let component: RoutingPostListComponent;
  let fixture: ComponentFixture<RoutingPostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingPostListComponent]
    });
    fixture = TestBed.createComponent(RoutingPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
