import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HomeComponent }      from './components/home/home.component';
import { FeedbackComponent }      from './components/feedback/feedback.component';
import { HelpComponent }      from './components/help/help.component';
import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, FeedbackComponent, HelpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
