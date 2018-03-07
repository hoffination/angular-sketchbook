import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ObservableDisplayComponent } from '../observable-display/observable-display.component';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-observable-wrapper',
  templateUrl: './observable-wrapper.component.html',
  styleUrls: ['./observable-wrapper.component.css']
})
export class ObservableWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('display') displayElement: ObservableDisplayComponent;
  dataStream: Subject<number>;
  myData = 0;

  constructor() { }

  ngOnInit() {
    this.dataStream = new Subject<number>();
  }

  ngOnDestroy() {
    this.dataStream.complete();
  }

  handleClick() {
    ++this.myData;
    this.dataStream.next(this.myData);
  }
}
