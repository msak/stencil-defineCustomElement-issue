import { r as registerInstance, h, e as Host } from './index-3ef34d12.js';

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

export { MyChild as __prefix___child };
