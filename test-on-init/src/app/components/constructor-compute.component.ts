import { Component, OnInit } from "@angular/core";
import * as math from 'mathjs';

@Component({
  selector: 'my-constructor-compute',
  template: '<p>A constructor compute function</p>'
})
export class ConstructorComputeComponent implements OnInit {
  constructor() {
    console.log('computed constructor value: ', math.factorial(12));
  }

  ngOnInit() {
    console.log('no onInit value');
  }
}