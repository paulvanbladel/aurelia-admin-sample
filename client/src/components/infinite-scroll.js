import {inject, customAttribute} from 'aurelia-framework';
import $ from 'jquery';
@customAttribute('infinite-scroll')
@inject(Element)
export class InfiniteScroll {


height (elem) {
          elem = elem[0] || elem;
          if (isNaN(elem.offsetHeight)) {
            return elem.document.documentElement.clientHeight;
          } else {
            return elem.offsetHeight;
          }
        };
offsetTop (elem) {
          if (!elem[0].getBoundingClientRect || elem.css('none')) {
            return;
          }
          return elem[0].getBoundingClientRect().top + pageYOffset(elem);
        };
pageYOffset(elem) {
          elem = elem[0] || elem;
          if (isNaN(window.pageYOffset)) {
            return elem.document.documentElement.scrollTop;
          } else {
            return elem.ownerDocument.defaultView.pageYOffset;
          }
        };

  constructor(element) {
    this.element = element;
    var self = this;
    this.throttle("scroll", "optimizedScroll");
    window.addEventListener("optimizedScroll", ()=> {
      var container = self.element;
      var containerBottom, containerTopOffset, elementBottom, remaining, shouldScroll;
          if (container === window) {
            containerBottom = this.height(container) + this.pageYOffset(container[0].document.documentElement);
            elementBottom = this.offsetTop(elem) + this.height(elem);
          } else {
            containerBottom = this.height(container);
            containerTopOffset = 0;
            if (this.offsetTop(container) !== void 0) {
              containerTopOffset = this.offsetTop(container);
            }
            elementBottom = this.offsetTop(elem) - containerTopOffset + this.height(elem);
          }
          if (useDocumentBottom) {
            elementBottom = this.height((elem[0].ownerDocument || elem[0].document).documentElement);
          }
          remaining = elementBottom - containerBottom;
          shouldScroll = remaining <= this.height(container) * scrollDistance + 1;
          if (shouldScroll) {
            checkWhenEnabled = true;
            if (scrollEnabled) {
              console.log('should scroll');
            }
          } else {
            return checkWhenEnabled = false;
          }
    });
        console.log("constructed");

  }

  throttle(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
  valueChanged(newValue){
    if (newValue) {
      console.log('new value');
    } else {
      //
    }
  }
}
