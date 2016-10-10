# Routing

This app contains 3 pages which are. Home, Feedback and Help


## File / Folder structure
- rkFeedback/ngFeedback>
	- app
		- components
			- home
				- home.component.ts
				- home.tpl.html
			- feedback
				- feedback.component.ts
				- feedback.tpl.html
			- help
				- help.component.ts
				- help.tpl.html
	- app.component.ts
	- app.module.ts
	- app.routing.ts
	- app.main.ts
	

### Step #1 : create necessary files for routing

**File:**  rkFeedback/ngFeedback/app/components/home/home.component.ts   
**File:**  rkFeedback/ngFeedback/app/components/home/home.tpl.html   
**File:**  rkFeedback/ngFeedback/app/components/feedback/feedback.component.ts   
**File:**  rkFeedback/ngFeedback/app/components/feedback/feedback.tpl.html   
**File:**  rkFeedback/ngFeedback/app/components/help/help.component.ts  
**File:**  rkFeedback/ngFeedback/app/components/help/help.tpl.html  

**File:**  rkFeedback/ngFeedback/app/app.tpl.html  
**File:**  rkFeedback/ngFeedback/app/app.routing.ts  

### Step #2 : base href
File: index.html
```html
<base href="/">
```

### Step #3 : routing.ts
File: routing.ts
```js
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './components/home/home.component';
import { FeedbackComponent }      from './components/feedback/feedback.component';
import { HelpComponent }      from './components/help/help.component';

const appRoutes: Routes = [
	{path: '',  redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'feedback', component: FeedbackComponent},
	{path: 'help', component: HelpComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

```

### Step #4 : changes to app.module.ts
File: app.module.ts
```js
...
import { HomeComponent }      from './components/home/home.component';
import { FeedbackComponent }      from './components/feedback/feedback.component';
import { HelpComponent }      from './components/help/help.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, FeedbackComponent, HelpComponent ],
})
...
```

### Step #5 : changes to app.component.ts
File: app.component.ts
```js
...
  selector: 'my-app',
  templateUrl: './app/app.tpl.html'		// template replaced with templateURL
...
```


