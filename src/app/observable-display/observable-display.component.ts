import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/delay';

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
    this.data
      .takeUntil(this.unsubscribe)
      .delay(0) // Best solution?
      .subscribe(number => {
        this.modal.open();
      })
  }
}
