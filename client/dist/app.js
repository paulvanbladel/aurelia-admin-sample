System.register(['aurelia-framework', './localStorage'], function (_export) {
	'use strict';

	var inject, ObserverLocator, bindable, Storage, App;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			ObserverLocator = _aureliaFramework.ObserverLocator;
			bindable = _aureliaFramework.bindable;
		}, function (_localStorage) {
			Storage = _localStorage.Storage;
		}],
		execute: function () {
			App = (function () {
				var _instanceInitializers = {};

				function App(observerLocator, localStorage) {
					_classCallCheck(this, _App);

					_defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

					this.toggle = false;
					this.mobileView = 992;

					this.observerLocator = observerLocator;
					this.localStorage = localStorage;
				}

				var _App = App;

				_createDecoratedClass(_App, [{
					key: 'toggleSidebar',
					value: function toggleSidebar() {
						this.toggle = !this.toggle;
						this.localStorage.set('toggle', this.toggle);
					}
				}, {
					key: 'activate',
					value: function activate() {
						var _this = this;

						console.log('activated');
						this.subscription = this.observerLocator.getObserver(this, 'width').subscribe(function (newValue, oldValue) {
							if (newValue >= _this.mobileView) {
								if (_this.localStorage.get('toggle') !== 'undefined') {
									_this.toggle = !_this.localStorage.get('toggle') ? false : true;
								} else {
									_this.toggle = true;
								}
							} else {
								_this.toggle = false;
							}
						});
					}
				}, {
					key: 'deactivate',
					value: function deactivate() {
						console.log('dispose subscription');
						this.subscription();
					}
				}, {
					key: 'configureRouter',
					value: function configureRouter(config, router) {
						this.router = router;
					}
				}, {
					key: 'router',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'width',
					get: function get() {
						return window.innerWidth;
					}
				}], null, _instanceInitializers);

				App = inject(ObserverLocator, Storage)(App) || App;
				return App;
			})();

			_export('App', App);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aURBUWEsR0FBRzs7Ozs7Ozs7Ozs4QkFMUixNQUFNO3VDQUNOLGVBQWU7Z0NBQ2YsUUFBUTs7MkJBQ1IsT0FBTzs7O0FBRUYsTUFBRzs7O0FBSUosYUFKQyxHQUFHLENBSUgsZUFBZSxFQUFFLFlBQVksRUFBQzs7Ozs7VUFGMUMsTUFBTSxHQUFFLEtBQUs7VUFDYixVQUFVLEdBQUcsR0FBRzs7QUFFZixTQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxTQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztLQUNqQzs7ZUFQVyxHQUFHOzs7O1lBYUYseUJBQUU7QUFDZCxVQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixVQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFHO01BQzlDOzs7WUFDTyxvQkFBRTs7O0FBQ1QsYUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixVQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FDakUsU0FBUyxDQUFDLFVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBRztBQUMvQixXQUFJLFFBQVEsSUFBSSxNQUFLLFVBQVUsRUFBRTtBQUNoQyxZQUFJLE1BQU0sWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBTSxXQUFXLEVBQUU7QUFDdEQsZUFBSyxNQUFNLEdBQUcsQ0FBRSxNQUFLLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztTQUMvRCxNQUFNO0FBQ04sZUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsTUFBTTtBQUNOLGNBQUssTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQjtPQUVHLENBQUMsQ0FBQztNQUNQOzs7WUFDUyxzQkFBRTtBQUNYLGFBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNqQyxVQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7TUFDcEI7OztZQUljLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDOUIsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7TUFDckI7OztrQkF6Q0gsUUFBUTs7YUFBVSxJQUFJOzs7OztVQU9iLGVBQUU7QUFDWCxhQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDekI7OztBQVZXLE9BQUcsR0FEZixNQUFNLENBQUMsZUFBZSxFQUFDLE9BQU8sQ0FBRSxDQUNwQixHQUFHLEtBQUgsR0FBRztXQUFILEdBQUc7OztrQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzcyEnO1xyXG4qL1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge09ic2VydmVyTG9jYXRvcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5AaW5qZWN0KE9ic2VydmVyTG9jYXRvcixTdG9yYWdlIClcclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcblx0QGJpbmRhYmxlIHJvdXRlciA9IG51bGw7XHJcblx0dG9nZ2xlPSBmYWxzZTtcclxuXHRtb2JpbGVWaWV3ID0gOTkyO1xyXG5cdGNvbnN0cnVjdG9yKG9ic2VydmVyTG9jYXRvciwgbG9jYWxTdG9yYWdlKXtcclxuXHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xyXG5cdFx0dGhpcy5sb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcblx0fVxyXG5cdGdldCB3aWR0aCAoKXtcclxuXHRcdHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVTaWRlYmFyKCl7XHJcblx0XHR0aGlzLnRvZ2dsZSA9ICF0aGlzLnRvZ2dsZTtcclxuXHRcdHRoaXMubG9jYWxTdG9yYWdlLnNldCgndG9nZ2xlJyx0aGlzLnRvZ2dsZSlcdFx0O1xyXG5cdH1cclxuXHRhY3RpdmF0ZSgpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJhY3RpdmF0ZWRcIik7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKHRoaXMsJ3dpZHRoJylcclxuXHRcdC5zdWJzY3JpYmUoKG5ld1ZhbHVlLG9sZFZhbHVlKT0+e1xyXG5cdFx0XHRpZiAobmV3VmFsdWUgPj0gdGhpcy5tb2JpbGVWaWV3KSB7XHJcblx0XHRcdFx0aWYgKCh0aGlzLmxvY2FsU3RvcmFnZS5nZXQoJ3RvZ2dsZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdHRoaXMudG9nZ2xlID0gISB0aGlzLmxvY2FsU3RvcmFnZS5nZXQoJ3RvZ2dsZScpID8gZmFsc2UgOiB0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvZ2dsZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudG9nZ2xlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuICAgICAgXHQvL2NvbnNvbGUubG9nKGBuZXcgdmFsdWUgOiAke25ld1ZhbHVlfSAgb2xkIHZhbHVlIDogJHtvbGRWYWx1ZX1gKTtcclxuICAgICAgfSk7XHJcblx0fVxyXG5cdGRlYWN0aXZhdGUoKXtcclxuXHRcdGNvbnNvbGUubG9nKFwiZGlzcG9zZSBzdWJzY3JpcHRpb25cIik7XHJcbiAgICBcdHRoaXMuc3Vic2NyaXB0aW9uKCk7IC8vIGRpc3Bvc2luZyB0aGUgc3Vic2NyaXB0aW9uXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xyXG4gICAgXHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=