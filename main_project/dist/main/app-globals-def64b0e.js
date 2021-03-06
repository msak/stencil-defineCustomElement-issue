import { E as Env } from './index-9d0a929f.js';

document.querySelector(`script[data-stencil-namespace=${Env['namespace']}]`)['data-opts'] = {
  transformTagName: (tagName) => tagName.lastIndexOf('__prefix__') === 0 ? tagName.replace('__prefix__', Env['prefix']) : tagName
};
const libGlobalScript = async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};

const mainGlobalScript = async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};

const globalScripts = () => {
  mainGlobalScript();
  libGlobalScript();
};

export { globalScripts as g };
