import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'paulvanbladel/rdash-ui/css/rdash.css!';

import {inject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

export class App {

    configureRouter(config, router){
    	this.router = router;
    }
}
