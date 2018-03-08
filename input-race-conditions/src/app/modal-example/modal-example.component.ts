import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent implements OnChanges {
  @Input() data: number;
  private changeStream = new Subject<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.changeStream.next(changes['data'].currentValue);
  }

  open() {
    console.log('Value changed to: ', this.data);
  }

  getChangeStream() {
    return this.changeStream.asObservable();
  }

}
