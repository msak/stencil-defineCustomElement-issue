import { r as registerInstance, h } from './index-9d0a929f.js';

const appProfileCss = ".app-profile{padding:10px}";

let AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    if (this.match && this.match.params.name) {
      return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!"), h("wmlist-my-component", { last: "PREFIX-MY-COMPONENT" }, "\uD83E\uDD13")));
    }
  }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };
