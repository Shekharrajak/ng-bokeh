import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBokehModule } from 'ng-bokeh';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBokehModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
