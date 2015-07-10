import {inject} from 'aurelia-framework';

import {bindable} from 'aurelia-framework';


export class SideBar {
	  @bindable router = null;
	  @bindable toggleSidebar() ;

	  toggleSidebar(){
	  	console.log("in side bar");
	  }
}
