System.register([], function (_export) {
	'use strict';

	var Storage;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [],
		execute: function () {
			Storage = (function () {
				function Storage() {
					_classCallCheck(this, Storage);
				}

				_createClass(Storage, [{
					key: 'get',
					value: function get(key) {
						if ('localStorage' in window && window['localStorage'] !== null) {
							return localStorage.getItem(key);
						} else {
							console.warn('Warning: Local Storage is disabled or unavailable');
							return undefined;
						}
					}
				}, {
					key: 'set',
					value: function set(key, value) {
						if ('localStorage' in window && window['localStorage'] !== null) {
							return localStorage.setItem(key, value);
						} else {
							console.warn('Warning: Local Storage is disabled or unavailable.  will not work correctly.');
							return undefined;
						}
					}
				}, {
					key: 'remove',
					value: function remove(key) {
						if ('localStorage' in window && window['localStorage'] !== null) {
							return localStorage.removeItem(key);
						} else {
							console.warn('Warning: Local Storage is disabled or unavailable.  will not work correctly.');
							return undefined;
						}
					}
				}]);

				return Storage;
			})();

			_export('Storage', Storage);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsU3RvcmFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7S0FBYSxPQUFPOzs7Ozs7Ozs7QUFBUCxVQUFPO2FBQVAsT0FBTzsyQkFBUCxPQUFPOzs7aUJBQVAsT0FBTzs7WUFDaEIsYUFBQyxHQUFHLEVBQUM7QUFDUCxVQUFJLGNBQWMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksRUFBRTtBQUMvRCxjQUFRLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDbEMsTUFBTTtBQUNOLGNBQU8sQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztBQUNsRSxjQUFPLFNBQVMsQ0FBQztPQUNqQjtNQUNGOzs7WUFFRSxhQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUM7QUFDZCxVQUFJLGNBQWMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksRUFBRTtBQUMvRCxjQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BRXhDLE1BQU07QUFDTixjQUFPLENBQUMsSUFBSSxDQUFDLDhFQUE4RSxDQUFDLENBQUM7QUFDN0YsY0FBTyxTQUFTLENBQUM7T0FDakI7TUFDRjs7O1lBRUssZ0JBQUMsR0FBRyxFQUFDO0FBQ1YsVUFBSSxjQUFjLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDL0QsY0FBTyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQ3BDLE1BQU07QUFDTixjQUFPLENBQUMsSUFBSSxDQUFDLDhFQUE4RSxDQUFDLENBQUM7QUFDN0YsY0FBTyxTQUFTLENBQUM7T0FDakI7TUFDRjs7O1dBM0JXLE9BQU87OztzQkFBUCxPQUFPIiwiZmlsZSI6ImxvY2FsU3RvcmFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdG9yYWdle1xyXG5cdGdldChrZXkpe1xyXG5cdFx0aWYgKCdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpOyBcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1dhcm5pbmc6IExvY2FsIFN0b3JhZ2UgaXMgZGlzYWJsZWQgb3IgdW5hdmFpbGFibGUnKTtcclxuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXQoa2V5LCB2YWx1ZSl7XHJcblx0XHRpZiAoJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvd1snbG9jYWxTdG9yYWdlJ10gIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybignV2FybmluZzogTG9jYWwgU3RvcmFnZSBpcyBkaXNhYmxlZCBvciB1bmF2YWlsYWJsZS4gIHdpbGwgbm90IHdvcmsgY29ycmVjdGx5LicpO1xyXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbW92ZShrZXkpe1xyXG5cdFx0aWYgKCdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCdXYXJuaW5nOiBMb2NhbCBTdG9yYWdlIGlzIGRpc2FibGVkIG9yIHVuYXZhaWxhYmxlLiAgd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuJyk7XHJcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==