import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-share',
  template: `<div>
    <p>Observable processed count: {{ count }}</p>
    <button (click)="addItem()">Add Item</button>
    <ul>
      <li *ngFor="let x of arr">
        Count processed {{ valueListener$ | async }}
      </li>
    </ul>
  </div>`
})
export class NoShareComponent implements OnDestroy {
  arr = [1,2,3,4];
  valueSubject$ = new Subject();
  count = 0;

  valueListener$ = this.valueSubject$
    .pipe(
      tap(() => { this.count++ }),
      filter((item: any) => item.time % 2 === 1),
      map((item: any) => item.value)
    )

  addItem() {
    this.valueSubject$.next({ time: Date.now(), value: this.count });
  }

  ngOnDestroy() {
    this.valueSubject$.complete();
  }
}
