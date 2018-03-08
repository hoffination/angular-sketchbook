import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableWrapperComponent } from './observable-wrapper.component';

describe('ObservableWrapperComponent', () => {
  let component: ObservableWrapperComponent;
  let fixture: ComponentFixture<ObservableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
