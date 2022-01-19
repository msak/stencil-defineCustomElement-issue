import { r as registerInstance, h, e as Host } from './index-7a25307b.js';

const myChildCss = ":host{display:block}";

let MyChild = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, "... and this is my child!"));
  }
};
MyChild.style = myChildCss;

export { MyChild as my_child };
