import { E as Env } from './index-931f4a75.js';

// import {defineCustomElements} from 'lib/loader';
var origin = customElements.define;
var context = customElements;
customElements.define = function (tag, ctr, opt, pre) {
  if (tag.indexOf('__prefix__-') === 0) {
    tag = tag.replace('__prefix__', pre ? pre : Env['prefix']);
  }
  return origin.call(context, tag, ctr, opt);
};
const appGlobalScript = async () => {
  // defineCustomElements(window, { transformTagName: (tagName) => `prefix-${tagName}` });
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};

const globalScripts = appGlobalScript;

export { globalScripts as g };
