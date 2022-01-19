import { r as registerInstance, h } from './index-7a25307b.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText(), h("span", null, h("slot", null)), h("my-child", null));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
