/*import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
*/
import {inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {Storage} from './localStorage';
@inject(ObserverLocator,Storage )
export class App {
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
		console.log("activated");
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
      	//console.log(`new value : ${newValue}  old value : ${oldValue}`);
      });
	}
	deactivate(){
		console.log("dispose subscription");
    	this.subscription(); // disposing the subscription
    }



    configureRouter(config, router){
    	this.router = router;
    }
}
