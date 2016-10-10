import { Component } from '@angular/core';
import myGlobals = require('./globals'); 
@Component({
  selector: 'my-app',
  templateUrl: 'themes/' + myGlobals.THEME + '/index.tpl.html',
  styleUrls: ['themes/' + myGlobals.THEME + '/css/theme.css'],
})
export class AppComponent { }
