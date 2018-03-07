import { Component, OnInit, ViewChild } from '@angular/core';

import { StaticDisplayComponent } from '../static-display/static-display.component';

@Component({
  selector: 'app-static-wrapper',
  templateUrl: './static-wrapper.component.html',
  styleUrls: ['./static-wrapper.component.css']
})
export class StaticWrapperComponent {
  @ViewChild('display') displayElement: StaticDisplayComponent;
  myData = 0;

  constructor() { }

  clickHandler() {
    ++this.myData;
    this.displayElement.openModal();
  }
}
