import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDisplayComponent } from './static-display.component';

describe('StaticDisplayComponent', () => {
  let component: StaticDisplayComponent;
  let fixture: ComponentFixture<StaticDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
