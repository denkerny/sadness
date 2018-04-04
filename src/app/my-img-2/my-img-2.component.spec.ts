import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImg2Component } from './my-img-2.component';

describe('MyImg2Component', () => {
  let component: MyImg2Component;
  let fixture: ComponentFixture<MyImg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
