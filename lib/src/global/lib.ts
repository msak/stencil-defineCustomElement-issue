import {Env} from '@stencil/core';

const libPrefix = 'my';

document.querySelector(`script[data-stencil-namespace=${Env['namespace']}]`)['data-opts'] = {
  transformTagName : (tagName) => { 
    
    return tagName.lastIndexOf(libPrefix+'-') === 0 ? `${Env['prefix']}-${tagName}` : tagName;
  }
};

export default async () => {

  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};
