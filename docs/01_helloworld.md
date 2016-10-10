# Hello World


### Terminals
**Windows Terminal** : for npm commands
```sh
e:
cd rkFeedback
cd ngFeedback
E:/rkFeedback/ngFeedback>
```

**GitBash Terminal** : for git commands
```sh
cd e:
cd rkFeedback
cd ngFeedback
hp@DESKTOP-D6V1CP9 MINGW64 /e/rkFeedback/ngFeedback

```
# Setting up the Angular 2 Environment

### Step #1 : create necessary configuration files for ng2 
**File:  rkFeedback/ngFeedback/package.json
**File:  rkFeedback/ngFeedback/typings.json
**File:  rkFeedback/ngFeedback/tsconfig.json
**File:  rkFeedback/ngFeedback/systemjs.config.js

Ref: https://angular.io/docs/ts/latest/quickstart.html

### Step #2 : Install necessary packages for Angular 2 using package.json file
```sh
npm install
```


## File / Folder structure
- rkFeedback/ngFeedback>
	- package.json
	- typings.json
	- tsconfig.json
	- systemjs.config.js
	- index.html

## Step #3: app folder
Let's create a folder to hold our application and add a super-simple Angular component.
```sh
$ mkdir app
```    
**File: app/app.component.ts**  
AppComponent is the root of the application

Every Angular app has at least one root component, conventionally named AppComponent, that hosts the client user experience. Components are the basic building blocks of Angular applications. A component controls a portion of the screen — a view — through its associated template.  

```javascript
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '&lt;h1&gt;My First Angular 2 App&lt;/h1&gt;'
})
export class AppComponent { }
``` 
**File: app/app.module.ts**  
We compose Angular apps into closely related blocks of functionality with Angular Modules. Every app requires at least one module, the root module, that we call AppModule by convention.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
**File: app/main.ts**  
Now we need something to tell Angular to load the app module. Create the file app/main.ts
```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
```

**File: index.html**  
In the project root folder create an index.html file with appropriate content
Minimal index file Eg:
```html
<html>
  <head>
    <title>Angular 2 QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
```

## Step #4: lite-server (optional)
We could use lite-server from npm without needing to worry about webserver installation and configuration  
Enter the following command in a terminal window (command window in Windows):
```sh
$ npm start
```