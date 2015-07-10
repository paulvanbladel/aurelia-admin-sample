System.register(['aurelia-router'], function (_export) {
	'use strict';

	var Router;

	_export('configure', configure);

	function configure(aurelia, configCallback) {
		aurelia.globalizeResources('./flickr');
		if (configCallback !== undefined && typeof configCallback === 'function') {
			var router = aurelia.container.get(Router);
			configCallback(router);
		}
	}

	return {
		setters: [function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZmxpY2tyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3NCQUNnQixTQUFTOztBQUFsQixVQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFDO0FBQ2pELFNBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2QyxNQUFHLGNBQWMsS0FBSyxTQUFTLElBQUksT0FBTyxjQUFjLEtBQU0sVUFBVSxFQUN4RTtBQUNDLE9BQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGlCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDdkI7RUFDRDs7OzsyQkFSTyxNQUFNIiwiZmlsZSI6Im1vZHVsZXMvZmxpY2tyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhLCBjb25maWdDYWxsYmFjayl7XHJcblx0YXVyZWxpYS5nbG9iYWxpemVSZXNvdXJjZXMoJy4vZmxpY2tyJyk7XHJcblx0aWYoY29uZmlnQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YoY29uZmlnQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKVxyXG5cdHtcclxuXHRcdHZhciByb3V0ZXIgPSBhdXJlbGlhLmNvbnRhaW5lci5nZXQoUm91dGVyKTtcclxuXHRcdGNvbmZpZ0NhbGxiYWNrKHJvdXRlcik7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9