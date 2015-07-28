import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'paulvanbladel/rdash-ui/css/rdash.css!';
export class App {
	
    configureRouter(config, router){
    	config.map([
				{ route: ['','welcome'], fa:'fa-bed',  moduleId: './modules/welcome/welcome',      nav: true, title:'Welcome' },
				{ route: 'flickr',   fa:'fa-bus'   ,      moduleId: './modules/flickr/flickr',       nav: true, title:'Flickr' },
				{ route: 'customer',  fa:'fa-camera-retro'   ,       moduleId: './modules/customer/index',       nav: true, title:'CRM', auth:true }
				/*{ route: 'signup',        moduleId: './signup',       nav: false, title:'Signup' },
				{ route: 'login',        moduleId: './login',       nav: false, title:'Login' },
				{ route: 'logout',        moduleId: './logout',       nav: false, title:'Logout' },
				{ route: 'profile',        moduleId: './profile',       nav: false, title:'Profile' }
				*/
				]);
    	this.router = router;
    }
	
	
}
