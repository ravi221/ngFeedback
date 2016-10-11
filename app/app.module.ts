import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HomeComponent }      from './components/home/home.component';
import { FeedbackComponent }      from './components/feedback/feedback.component';
import { HelpComponent }      from './components/help/help.component';
import {routing} from './app.routing';
import {TranslateModule} from "ng2-translate/ng2-translate";

@NgModule({
  imports:      [ BrowserModule, routing,
  	 TranslateModule.forRoot() 
  	 
  ],
  declarations: [ AppComponent, HomeComponent, FeedbackComponent, HelpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
