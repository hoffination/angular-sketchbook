import { Component } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Service } from './statics/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    this.subscribeTest();
    this.importStatic();
  }

  subscribeTest() {
    let unsubscribe = new Subject();

    let mySubject = new BehaviorSubject('A');

    let subscription = mySubject
      .takeUntil(unsubscribe)
      .subscribe(console.log);

    unsubscribe.complete();
    
    mySubject.next('B');

    unsubscribe.subscribe(console.log);
    
    unsubscribe.next(true);
    console.log(subscription.closed);
  }

  importStatic() {
    return Service.simpleFunc();
  }

  returnStatic() {
    return Service.x;
  }
}
