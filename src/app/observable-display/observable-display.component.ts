import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';

import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';

import { ModalExampleComponent } from '../modal-example/modal-example.component';

@Component({
  selector: 'app-observable-display',
  templateUrl: './observable-display.component.html',
  styleUrls: ['./observable-display.component.css']
})
export class ObservableDisplayComponent implements OnInit {
  @Input() data: Observable<number>;
  @ViewChild('modal') modal: ModalExampleComponent;

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit() {
    combineLatest(this.data, this.modal.getChangeStream())
      .filter(([data, model]) => data === model)
      .takeUntil(this.unsubscribe)
      .subscribe(number => {
        this.modal.open()
      });
  }
}
