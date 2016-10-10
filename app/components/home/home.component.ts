import { Component } from '@angular/core';
import myGlobals = require('../../globals'); 

@Component({
	templateUrl: './app/components/home/home.html.tpl'	
})

export class HomeComponent{
	public pageText = "My Home Page",
	constructor(){
		this.pageText = this.pageText + " "+ myGlobals.VERSION;
	}
}