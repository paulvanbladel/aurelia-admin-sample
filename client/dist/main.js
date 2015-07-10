System.register([], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css').plugin('./modules/welcome/index', function (router) {
            router.addRoute({
                route: 'welcome',
                name: 'welcome',
                fa: 'fa-bed',
                moduleId: './modules/welcome/welcome',
                nav: true,
                title: 'Welcome' });
            router.addRoute({
                route: 'welcome',
                name: 'welcome',
                fa: 'fa-bed',
                moduleId: './modules/welcome/welcome',
                nav: false,
                title: 'Welcome' });
        }).plugin('./modules/flickr/index', function (router) {
            router.addRoute({
                route: 'flickr',
                name: 'flickr',
                fa: 'fa-bus',
                moduleId: './modules/flickr/flickr',
                nav: true,
                title: 'Flickr' });
        });

        aurelia.start().then(function (a) {
            return a.setRoot();
        });
    }

    return {
        setters: [],
        execute: function () {
            ;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUNnQixTQUFTOztBQUFsQixhQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDbEMsZUFBTyxDQUFDLEdBQUcsQ0FDUCxxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FDOUIsTUFBTSxDQUFDLHlCQUF5QixFQUFFLFVBQUMsTUFBTSxFQUFHO0FBQy9DLGtCQUFNLENBQUMsUUFBUSxDQUFDO0FBQ04scUJBQUssRUFBRyxTQUFTO0FBQ2pCLG9CQUFJLEVBQUUsU0FBUztBQUNmLGtCQUFFLEVBQUMsUUFBUTtBQUNYLHdCQUFRLEVBQUUsMkJBQTJCO0FBQ3JDLG1CQUFHLEVBQUUsSUFBSTtBQUNULHFCQUFLLEVBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN2QixrQkFBTSxDQUFDLFFBQVEsQ0FBQztBQUNaLHFCQUFLLEVBQUcsU0FBUztBQUNqQixvQkFBSSxFQUFFLFNBQVM7QUFDZixrQkFBRSxFQUFDLFFBQVE7QUFDWCx3QkFBUSxFQUFFLDJCQUEyQjtBQUNyQyxtQkFBRyxFQUFFLEtBQUs7QUFDVixxQkFBSyxFQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUVELE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLE1BQU0sRUFBRztBQUN4QyxrQkFBTSxDQUFDLFFBQVEsQ0FBQztBQUNaLHFCQUFLLEVBQUUsUUFBUTtBQUNmLG9CQUFJLEVBQUUsUUFBUTtBQUNkLGtCQUFFLEVBQUMsUUFBUTtBQUNYLHdCQUFRLEVBQUUseUJBQXlCO0FBQ25DLG1CQUFHLEVBQUUsSUFBSTtBQUNULHFCQUFLLEVBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNyQixDQUFDLENBQUM7O0FBRVAsZUFBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7bUJBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtTQUFBLENBQUMsQ0FBQztLQUMxQzs7Ozs7QUFDRCxhQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XHJcblx0YXVyZWxpYS51c2VcclxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpXHJcbiAgICAucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpXHJcbiAgICAucGx1Z2luKCcuL21vZHVsZXMvd2VsY29tZS9pbmRleCcsIChyb3V0ZXIpPT57XHJcblx0XHRyb3V0ZXIuYWRkUm91dGUoeyBcclxuICAgICAgICAgICAgcm91dGU6ICAnd2VsY29tZScsIFxyXG4gICAgICAgICAgICBuYW1lOiAnd2VsY29tZScsICBcclxuICAgICAgICAgICAgZmE6J2ZhLWJlZCcgLCBcclxuICAgICAgICAgICAgbW9kdWxlSWQ6ICcuL21vZHVsZXMvd2VsY29tZS93ZWxjb21lJywgXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSwgXHJcbiAgICAgICAgICAgIHRpdGxlOidXZWxjb21lJyB9KTtcclxuICAgICAgICByb3V0ZXIuYWRkUm91dGUoeyBcclxuICAgICAgICAgICAgcm91dGU6ICAnd2VsY29tZScsIFxyXG4gICAgICAgICAgICBuYW1lOiAnd2VsY29tZScsICBcclxuICAgICAgICAgICAgZmE6J2ZhLWJlZCcgLCBcclxuICAgICAgICAgICAgbW9kdWxlSWQ6ICcuL21vZHVsZXMvd2VsY29tZS93ZWxjb21lJywgXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2UsIFxyXG4gICAgICAgICAgICB0aXRsZTonV2VsY29tZScgfSk7XHJcbiAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgLnBsdWdpbignLi9tb2R1bGVzL2ZsaWNrci9pbmRleCcsIChyb3V0ZXIpPT57XHJcbiAgICAgICAgcm91dGVyLmFkZFJvdXRlKHsgXHJcbiAgICAgICAgICAgIHJvdXRlOiAnZmxpY2tyJywgXHJcbiAgICAgICAgICAgIG5hbWU6ICdmbGlja3InLCBcclxuICAgICAgICAgICAgZmE6J2ZhLWJ1cycgICAsICAgICBcclxuICAgICAgICAgICAgbW9kdWxlSWQ6ICcuL21vZHVsZXMvZmxpY2tyL2ZsaWNrcicsICAgICAgIFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsIFxyXG4gICAgICAgICAgICB0aXRsZTonRmxpY2tyJyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oYSA9PiBhLnNldFJvb3QoKSk7XHJcbn1cclxuOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==