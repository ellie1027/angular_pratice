import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerContent2Component } from './inner-content2.component';

describe('InnerContent2Component', () => {
  let component: InnerContent2Component;
  let fixture: ComponentFixture<InnerContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerContent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
