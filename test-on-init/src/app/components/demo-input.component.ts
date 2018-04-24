import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'my-demo-input',
  template: '<p>A {{ test }}</p>'
})
export class DemoInputComponent implements OnInit {
  @Input('test') test: string;

  constructor() {
    console.log('input constructor value: ', this.test);
  }

  ngOnInit() {
    console.log('input onInit value: ', this.test);
  }
}