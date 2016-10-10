import { Component } from '@angular/core';
import myGlobals = require('../../globals'); 

@Component({
	templateUrl: 'themes/' + myGlobals.THEME + '/home.tpl.html',
})

export class HomeComponent{
	public pageText = "My Home Page";
	constructor(){
		this.pageText = this.pageText + " "+ myGlobals.VERSION;
	}
}