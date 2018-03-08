import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaticWrapperComponent } from './static-wrapper/static-wrapper.component';
import { StaticDisplayComponent } from './static-display/static-display.component';
import { ObservableDisplayComponent } from './observable-display/observable-display.component';
import { ObservableWrapperComponent } from './observable-wrapper/observable-wrapper.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticWrapperComponent,
    StaticDisplayComponent,
    ObservableDisplayComponent,
    ObservableWrapperComponent,
    ModalExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
