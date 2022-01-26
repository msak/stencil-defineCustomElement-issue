import { r as registerInstance, h, e as Host } from './index-3ef34d12.js';

const appHomeCss = ".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("__prefix__-component", { first: "MY-COMPONENT" }, "\uD83D\uDC7B"), h("wmlist-component", { first: "PREFIX-MY-COMPONENT" }, "\uD83E\uDD13")));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
