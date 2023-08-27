import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUser2Component } from './post-user2.component';

describe('PostUser2Component', () => {
  let component: PostUser2Component;
  let fixture: ComponentFixture<PostUser2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostUser2Component]
    });
    fixture = TestBed.createComponent(PostUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
