'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59bb9dd4.js');

const myChildCss = ":host{display:block}";

let MyChild = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, "... and this is my child!"));
  }
};
MyChild.style = myChildCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText(), index.h("span", null, index.h("slot", null)), index.h("my-child", null));
  }
};
MyComponent.style = myComponentCss;

exports.my_child = MyChild;
exports.my_component = MyComponent;
