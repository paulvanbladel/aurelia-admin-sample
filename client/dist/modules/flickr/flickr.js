System.register(['aurelia-framework', 'aurelia-http-client', '../messages', 'aurelia-metadata'], function (_export) {
  'use strict';

  var inject, HttpClient, ContactUpdated, Metadata, Flickr;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
    }, function (_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }],
    execute: function () {
      Flickr = (function () {
        function Flickr(http) {
          _classCallCheck(this, _Flickr);

          this.heading = 'Flickr';
          this.images = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        var _Flickr = Flickr;

        _createClass(_Flickr, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }]);

        Flickr = inject(HttpClient)(Flickr) || Flickr;
        return Flickr;
      })();

      _export('Flickr', Flickr);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZmxpY2tyL2ZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0RBS2EsTUFBTTs7Ozs7Ozs7aUNBTFgsTUFBTTs7c0NBQ04sVUFBVTs7aUNBQ1YsY0FBYzs7a0NBQ2QsUUFBUTs7O0FBRUgsWUFBTTtBQUtOLGlCQUxBLE1BQU0sQ0FLTCxJQUFJLEVBQUM7OztlQUpmLE9BQU8sR0FBRyxRQUFRO2VBQ3BCLE1BQU0sR0FBRyxFQUFFO2VBQ1gsR0FBRyxHQUFHLDhGQUE4Rjs7QUFHbEcsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FFbEI7O3NCQVJVLE1BQU07Ozs7aUJBVVQsb0JBQUU7OztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEQsb0JBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztXQUNKOzs7QUFkVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6Im1vZHVsZXMvZmxpY2tyL2ZsaWNrci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7Q29udGFjdFVwZGF0ZWR9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuaW1wb3J0IHtNZXRhZGF0YX0gZnJvbSAnYXVyZWxpYS1tZXRhZGF0YSc7XHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIEZsaWNrcntcclxuICAgIGhlYWRpbmcgPSAnRmxpY2tyJztcclxuICBpbWFnZXMgPSBbXTtcclxuICB1cmwgPSAnaHR0cDovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL2ZlZWRzL3Bob3Rvc19wdWJsaWMuZ25lP3RhZ3M9bW91bnRhaW4mdGFnbW9kZT1hbnkmZm9ybWF0PWpzb24nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGh0dHApe1xyXG4gICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy51cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlcyA9IHJlc3BvbnNlLmNvbnRlbnQuaXRlbXM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9