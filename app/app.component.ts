import { Component, OnInit } from '@angular/core';
import myGlobals = require('./globals'); 

import {TranslateService} from 'ng2-translate/ng2-translate';
@Component({
  selector: 'my-app',
  templateUrl: 'themes/' + myGlobals.THEME + '/index.tpl.html',
  styleUrls: ['themes/' + myGlobals.THEME + '/css/theme.css'],
  
})
export class AppComponent implements OnInit { 
  public langList = [];
  public currentLang = '';
  constructor(private translate: TranslateService) {
 		translate.setDefaultLang(myGlobals.languageFallback);
        translate.use(myGlobals.languageDefault);
        this.currentLang=myGlobals.languageDefault;
    }
	 ngOnInit(){
        this.langList  = myGlobals.languageList;
    }

    onLangChange(val){
      this.translate.use(val);
      this.currentLang=val;
    }
}
