import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDisplayComponent } from './observable-display.component';

describe('ObservableDisplayComponent', () => {
  let component: ObservableDisplayComponent;
  let fixture: ComponentFixture<ObservableDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
