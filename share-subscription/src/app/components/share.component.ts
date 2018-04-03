import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { filter, map, tap, share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  template: `<br><div>
    <p>Shared Observable processed count: {{ count }}</p>
    <button (click)="addItem()">Add Shared Item</button>
    <ul>
      <li *ngFor="let x of arr">
        Count processed {{ valueListener$ | async }}
      </li>
    </ul>
  </div>`
})
export class ShareComponent implements OnDestroy {
  arr = [1,2,3,4];
  valueSubject$ = new Subject();
  count = 0;

  valueListener$ = this.valueSubject$
    .pipe(
      tap(() => { this.count++ }),
      filter((item: any) => item.time % 2 === 1),
      map((item: any) => item.value),
      share()
    )

  addItem() {
    this.valueSubject$.next({ time: Date.now(), value: this.count });
  }

  ngOnDestroy() {
    this.valueSubject$.complete();
  }
}
