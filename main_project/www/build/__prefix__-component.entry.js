import { E as Env, h as h$1, r as registerInstance } from './index-575de03d.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

// import { plt }  from '@stencil/core/internal/client';
// create a shadow function for h() which replaces all child elements of given namesapce prefix defined in stencil.config.ts
// import this h() instead of stencil/core's
function h(...args) {
  // rename own components by namespace prefix defined in stencil.config.ts 
  if (
  // plt.replaceNSPrefix && 
  typeof (args[0]) === 'string' &&
    args[0].indexOf('__prefix__-') > -1) {
    // args[0] = `${plt.replaceNSPrefix}-${args[0]}`;
    args[0] = args[0].replace('__prefix__', Env['prefix']);
  }
  switch (args.length) {
    case 1:
      return h$1(args[0]);
    case 2:
      return h$1(args[0], args[1]);
    case 3:
      return h$1(args[0], args[1], args[2]);
    default:
      return h$1(args[0], args[1], args.slice(2));
  }
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
    return h("div", null, "Hello, World! I'm ", this.getText(), h("span", null, h("slot", null)), h("__prefix__-child", null));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as __prefix___component };
