# Global variables / configuration 


### Step #1 : Folderstructure


File: globals.ts
```javascript
'use strict';
export var VERSION = "v1.0.0";
export var THEME = "bs4";
```

### Step #2 : Accessing globals
Eg>.

File: app.components/home/home.component.ts
```javascript
import myGlobals = require('../../globals'); 
...
public pageText = "My Home Page",
	constructor(){
		this.pageText = this.pageText + " "+ myGlobals.VERSION;
	}
}
```

### Step #3

File: app.components/home/home.tpl.html

```html
<h1>Home page</h1>
{{this.pageText}}
```