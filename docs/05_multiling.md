# Implimentation of Multi Lingual content

## Step #1: Installation of ng2-translate
Run the following command  from the command line:
```sh
  npm install ng2-translate --save
```

## Step #2: Changes to systemjs.config.js
```javascript
...
 var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    //'ng2-translate': 'node_modules/ng2-translate',      // + included in the map list
    "ng2-translate/ng2-translate": "node_modules/ng2-translate/bundles/ng2-translate.js"
  };
// packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'ng2-translate': { main: 'ng2-translate.js', defaultExtension: 'js' }   // + Included in the packages list    
  };
   ...
```
## Step #3: changes to app/app.module.ts

```javascript
...
import {HttpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate/ng2-translate';

@NgModule({
  imports:      [ 
      BrowserModule, 
      routing,
      HttpModule,
        TranslateModule.forRoot()
   ],
...
```


## Step #4: chagnes to app/app.component.ts
```javascript
...
import {TranslateService} from 'ng2-translate/ng2-translate';
...

```


## Step #5: Create language files:
File : i18n/en.json  
```json
{
    "HELLO": "hello"
}
```
Files : i18n/hi.json
```json
{
    "HELLO": "नमस्ते"
}
```

Files : i18n/tl.json
```json
{
    "HELLO": "வணக்கம்"
}
```

## Step #5: changes to globals.ts:
File : app/globals.ts

```javascript
...
export var languageList = [
  {lang:'en', flag:'en.gif', title: "English" },
  {lang:'hi', flag:'in.gif', title: "Hindi" },
  {lang:'tl', flag:'in.gif', title: "Tamil" } 
];
export var languageDefault = 'hi';
export var languageFallback = 'en';
...

```





# Implementing Language Switcher
## Step #1: changes to app/app.component.ts  
```javascript
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
```
## Step #2:  Changes to theme file
File: themes/default/theme.tpl.html
File: create images folder and insert language flags.

```html
<span *ngFor="let item of langList">
    <span *ngIf="currentLang==item.lang">
        <img  class="privacy_link" src="images/{{item.flag}}"  > 
    </span>
    <span *ngIf="currentLang!=item.lang" >
        <a (click)="onLangChange(item.lang)" style="cursor: pointer; cursor: hand;">
            <img  src="images/{{item.flag}}"  >
        </a>
    </span>
    &nbsp; &nbsp;
</span>
```