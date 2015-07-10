import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'paulvanbladel/rdash-ui/css/rdash.css!';
import {inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {Storage} from './components/localStorage';
@inject(ObserverLocator,Storage)
export class App {
	
    configureRouter(config, router){
    	this.router = router;
    }
	
	mobileView = 992;
	constructor(observerLocator, localStorage){
		this.observerLocator = observerLocator;
		this.localStorage = localStorage;
	}
	get width (){
		return window.innerWidth;
	}

	toggleSidebar = function(){
		this.toggle = !this.toggle;
		this.localStorage.set('toggle',this.toggle)		;
	}
	activate(){
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
	deactivate(){
		console.log("dispose subscription");
    	this.innerWidthsubscription(); // disposing the subscription
    }
}
