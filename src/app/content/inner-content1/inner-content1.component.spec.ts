import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerContent1Component } from './inner-content1.component';

describe('InnerContent1Component', () => {
  let component: InnerContent1Component;
  let fixture: ComponentFixture<InnerContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerContent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
