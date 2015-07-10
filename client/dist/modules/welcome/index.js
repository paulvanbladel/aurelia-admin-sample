System.register(['aurelia-router'], function (_export) {
	'use strict';

	var Router;

	_export('configure', configure);

	function configure(aurelia, configCallback) {
		aurelia.globalizeResources('./welcome');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvd2VsY29tZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztzQkFDZ0IsU0FBUzs7QUFBbEIsVUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBQztBQUNqRCxTQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEMsTUFBRyxjQUFjLEtBQUssU0FBUyxJQUFJLE9BQU8sY0FBYyxLQUFNLFVBQVUsRUFDeEU7QUFDQyxPQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxpQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQ3ZCO0VBQ0Q7Ozs7MkJBUk8sTUFBTSIsImZpbGUiOiJtb2R1bGVzL3dlbGNvbWUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZ0NhbGxiYWNrKXtcclxuXHRhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygnLi93ZWxjb21lJyk7XHJcblx0aWYoY29uZmlnQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YoY29uZmlnQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKVxyXG5cdHtcclxuXHRcdHZhciByb3V0ZXIgPSBhdXJlbGlhLmNvbnRhaW5lci5nZXQoUm91dGVyKTtcclxuXHRcdGNvbmZpZ0NhbGxiYWNrKHJvdXRlcik7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9