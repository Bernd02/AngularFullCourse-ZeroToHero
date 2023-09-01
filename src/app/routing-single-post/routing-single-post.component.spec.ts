import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSinglePostComponent } from './routing-single-post.component';

describe('RoutingSinglePostComponent', () => {
  let component: RoutingSinglePostComponent;
  let fixture: ComponentFixture<RoutingSinglePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingSinglePostComponent]
    });
    fixture = TestBed.createComponent(RoutingSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
