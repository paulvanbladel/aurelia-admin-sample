System.register(['aurelia-framework', '../messages'], function (_export) {
  'use strict';

  var computedFrom, inject, ContactUpdated, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      inject = _aureliaFramework.inject;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
          this.screenMessage = 'qsdfqsdfqsdfqsdf';
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvd2VsY29tZS93ZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0Q0FLYSxPQUFPLEVBNkJQLG1CQUFtQjs7Ozs7Ozs7dUNBbEN4QixZQUFZO2lDQUNaLE1BQU07O2lDQUNOLGNBQWM7OztBQUdULGFBQU87QUFlUCxpQkFmQSxPQUFPLEdBZUw7Z0NBZkYsT0FBTzs7ZUFFbEIsT0FBTyxHQUFHLHdDQUF3QztlQUNsRCxTQUFTLEdBQUcsTUFBTTtlQUNsQixRQUFRLEdBQUcsS0FBSztlQUNoQixhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVE7ZUFDN0IsYUFBYSxHQUFHLGtCQUFrQjtTQVVqQzs7cUJBaEJVLE9BQU87O2lCQWlCWixrQkFBRTtBQUNOLGdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbkMsaUJBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7V0FDckM7OztpQkFFWSx5QkFBRztBQUNkLGdCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN4QyxxQkFBTyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRDtXQUNGOzs7ZUFkVyxlQUFFO0FBQ1osbUJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7ZUFkVSxPQUFPOzs7eUJBQVAsT0FBTzs7QUE2QlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6Im1vZHVsZXMvd2VsY29tZS93ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtDb250YWN0VXBkYXRlZH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWxjb21le1xyXG5cclxuICBoZWFkaW5nID0gJ1dlbGNvbWUgdG8gdGhlIEF1cmVsaWEgTmF2aWdhdGlvbiBBcHAhJztcclxuICBmaXJzdE5hbWUgPSAnSm9obic7XHJcbiAgbGFzdE5hbWUgPSAnRG9lJztcclxuICBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuICBzY3JlZW5NZXNzYWdlID0gXCJxc2RmcXNkZnFzZGZxc2RmXCI7XHJcblxyXG4gIC8vR2V0dGVycyBjYW4ndCBiZSBvYnNlcnZlZCB3aXRoIE9iamVjdC5vYnNlcnZlLCBzbyB0aGV5IG11c3QgYmUgZGlydHkgY2hlY2tlZC5cclxuICAvL0hvd2V2ZXIsIGlmIHlvdSB0ZWxsIEF1cmVsaWEgdGhlIGRlcGVuZGVuY2llcywgaXQgbm8gbG9uZ2VyIG5lZWRzIHRvIGRpcnR5IGNoZWNrIHRoZSBwcm9wZXJ0eS5cclxuICAvL1RvIG9wdGltaXplIGJ5IGRlY2xhcmluZyB0aGUgcHJvcGVydGllcyB0aGF0IHRoaXMgZ2V0dGVyIGlzIGNvbXB1dGVkIGZyb20sIHVuY29tbWVudCB0aGUgbGluZSBiZWxvdy5cclxuICAvL0Bjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXHJcbiAgZ2V0IGZ1bGxOYW1lKCl7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gIH1cclxuICBzdWJtaXQoKXtcclxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XHJcbiAgICBhbGVydChgV2VsY29tZSwgJHt0aGlzLmZ1bGxOYW1lfSFgKTtcclxuICB9XHJcblxyXG4gIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5mdWxsTmFtZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBwZXJWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KHZhbHVlKXtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=