import {  Env, h as horigin} from '@stencil/core';
const libPrefix = 'my';
// import { plt }  from '@stencil/core/internal/client';

// create a shadow function for h() which replaces all child elements of given namesapce prefix defined in stencil.config.ts
// import this h() instead of stencil/core's
export function h(...args: any[]) {
  // rename own components by namespace prefix defined in stencil.config.ts 
  if (
      // plt.replaceNSPrefix && 
      typeof(args[0]) === 'string' && 
      args[0].lastIndexOf(libPrefix+'-') === 0
  ) {
    args[0] = `${Env['prefix']}-${args[0]}`;
    // args[0] = args[0].replace('__prefix__', Env['prefix']);
  }


  switch (args.length) {
    case 1:
      return horigin(args[0]);
    case 2:
      return horigin(args[0],args[1]);
    case 3:
      return horigin(args[0], args[1], args[2]);
    default:
      return horigin(args[0], args[1], args.slice(2));
  }

}
