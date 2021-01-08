import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerContent3Component } from './inner-content3.component';

describe('InnerContent3Component', () => {
  let component: InnerContent3Component;
  let fixture: ComponentFixture<InnerContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerContent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
