import {inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {Storage} from './localStorage';
export class SideBar {
	@bindable router = null;
	toggle= false;
	mobileView = 992;
	constructor(observerLocator, localStorage){
		this.observerLocator = observerLocator;
		this.localStorage = localStorage;
	}
	get width (){
		return window.innerWidth;
	}


	toggleSidebar(){
		this.toggle = !this.toggle;
		this.localStorage.set('toggle',this.toggle)		;
	}
	activate(){
		this.subscription = this.observerLocator.getObserver(this,'width')
		.subscribe((newValue,oldValue)=>{
			if (newValue >= this.mobileView) {
				if ((this.localStorage.get('toggle')) !== 'undefined') {
					this.toggle = ! this.localStorage.get('toggle') ? false : true;
				} else {
					this.toggle = true;
				}
			} else {
				this.toggle = false;
			}
      });
	}
	deactivate(){
		console.log("dispose subscription");
    	this.subscription(); // disposing the subscription
    }

}
