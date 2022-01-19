import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myChildCss = ":host{display:block}";

let MyChild = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, "... and this is my child!"));
  }
  static get style() { return myChildCss; }
};
MyChild = /*@__PURE__*/ proxyCustomElement(MyChild, [1, "my-child"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-child"];
  components.forEach(tagName => { switch (tagName) {
    case "my-child":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyChild);
      }
      break;
  } });
}

export { MyChild as M, defineCustomElement as d };
