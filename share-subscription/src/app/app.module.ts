import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoShareComponent } from './components/no-share.component';
import { ShareComponent } from './components/share.component';

@NgModule({
  declarations: [
    AppComponent,
    NoShareComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
