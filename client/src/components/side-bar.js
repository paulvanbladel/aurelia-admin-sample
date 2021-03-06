
import {inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {Storage} from './localStorage';
@inject(ObserverLocator,Storage)
export class SideBar {
	@bindable router = null;
	mobileView = 992;
	constructor(observerLocator, localStorage){
		this.observerLocator = observerLocator;
		this.localStorage = localStorage;
		this._createInnerWidthSubscription();

	}
	get width (){
		return window.innerWidth;
	}

	_createInnerWidthSubscription(){
		this.innerWidthsubscription = this.observerLocator.getObserver(this,'width')
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

	toggleSidebar = function(){
		this.toggle = !this.toggle;
		this.localStorage.set('toggle',this.toggle)		;
	}
	activate(){

	}
	deactivate(){
		console.log("dispose subscription");
    	this.innerWidthsubscription(); // disposing the subscription
    }
}
