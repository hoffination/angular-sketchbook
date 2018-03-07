import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticWrapperComponent } from './static-wrapper.component';

describe('StaticWrapperComponent', () => {
  let component: StaticWrapperComponent;
  let fixture: ComponentFixture<StaticWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
