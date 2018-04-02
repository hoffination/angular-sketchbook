import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Service } from './statics/service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    spyOn(Service, 'simpleFunc').and.returnValue(true);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should call static member', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.importStatic()).toEqual(true);
    expect(Service.simpleFunc).toHaveBeenCalled();
    expect(app.returnStatic()).toEqual(4);
  });
});

describe('AppComponent 2', () => {
  beforeEach(async(() => {
    spyOn(Service, 'simpleFunc').and.returnValue(true);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should call static member', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.importStatic()).toEqual(true);
    expect(Service.simpleFunc).toHaveBeenCalled();
    expect(app.returnStatic()).toEqual(3);
  });
});