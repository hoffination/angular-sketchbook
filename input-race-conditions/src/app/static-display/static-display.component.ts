import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ModalExampleComponent } from '../modal-example/modal-example.component';

@Component({
  selector: 'app-static-display',
  templateUrl: './static-display.component.html',
  styleUrls: ['./static-display.component.css']
})
export class StaticDisplayComponent {
  @ViewChild('modal') modal: ModalExampleComponent;
  @Input() data;

  constructor() { }

  openModal() {
    setTimeout(() => this.modal.open(), 0);
  }
}
