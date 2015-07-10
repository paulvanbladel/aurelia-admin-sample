import {Router} from 'aurelia-router';
export function configure(aurelia, configCallback){
	aurelia.globalizeResources('./welcome');
	if(configCallback !== undefined && typeof(configCallback) === 'function')
	{
		var router = aurelia.container.get(Router);
		configCallback(router);
	}
}