
# Themes

### Step #1 : Create folder structure: 
- themes/<theme>
	- css
	- js
	- img
	- index.tpl.html
	- home.tpl.html
	- feedback.tpl.html
	- help.tpl.html

### Step #2 :

Move files from app/components/<component>/<component>.tpl.html to themes/<theme>

### Step #3 : app/components/app.component.ts
```javascript
...
import myGlobals = require('../../globals'); 

templateUrl: 'themes/' + myGlobals.THEME + '/index.tpl.html',
styleUrls: ['themes/' + myGlobals.THEME + '/css/theme.css'],
...
```

### Step #4 : app/components/home/home.component.ts
File: app/components/home/home.component.ts
```javascript
...
import myGlobals = require('../../globals'); 

templateUrl: 'themes/' + myGlobals.THEME + '/home.tpl.html'

public pageText = "My Home Page";
	constructor(){
		this.pageText = this.pageText + " "+ myGlobals.VERSION;
	}
...
```

### Step #5 : app/components/feedback/feedback.component.ts
File: app/components/feedback/feedback.component.ts
```javascript
...
import myGlobals = require('../../globals'); 

templateUrl: 'themes/' + myGlobals.THEME + '/feedback.tpl.html'

...
```

### Step #6 : app/components/help/help.component.ts
File: app/components/help/help.component.ts
```javascript
...
import myGlobals = require('../../globals'); 

templateUrl: 'themes/' + myGlobals.THEME + '/help.tpl.html'

...
```

### Step #7 : themes/bs4/css/theme.css
File: themes/bs4/css/theme.css
```css
.style{
	
}
```