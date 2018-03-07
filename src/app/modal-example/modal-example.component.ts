import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent {
  @Input() data: number;

  constructor() { }

  open() {
    console.log('Value changed to: ', this.data);
  }

}
