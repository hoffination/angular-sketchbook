import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Service } from './statics/service';

import 'rxjs/add/operator/takeUntil';

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
    const unsubscribe = new Subject();

    const mySubject = new BehaviorSubject('A');

    const subscription = mySubject
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
