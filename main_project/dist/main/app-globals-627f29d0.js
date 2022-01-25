// import {defineCustomElements} from 'lib/loader';
debugger;
document.getElementById('app')['data-opts'] = {
  transformTagName: (tagName) => tagName.lastIndexOf('my-') === 0 ? `prefix-${tagName}` : tagName
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
