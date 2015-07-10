
export function configure(aurelia) {
	aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('./modules/welcome/index', (router)=>{
		router.addRoute({ 
            route:  'welcome', 
            name: 'welcome',  
            fa:'fa-bed' , 
            moduleId: './modules/welcome/welcome', 
            nav: true, 
            title:'Welcome' });
        router.addRoute({ 
            route:  'welcome', 
            name: 'welcome',  
            fa:'fa-bed' , 
            moduleId: './modules/welcome/welcome', 
            nav: false, 
            title:'Welcome' });
    })
        
    .plugin('./modules/flickr/index', (router)=>{
        router.addRoute({ 
            route: 'flickr', 
            name: 'flickr', 
            fa:'fa-bus'   ,     
            moduleId: './modules/flickr/flickr',       
            nav: true, 
            title:'Flickr' });
        });
    
    aurelia.start().then(a => a.setRoot());
}
;