import { Env, h as horigin} from '@stencil/core';
import { plt }  from '@stencil/core/internal/client';

// create a shadow function for h() which replaces all child elements of given namesapce prefix defined in stencil.config.ts
// import this h() instead of stencil/core's
export function h(...args: any[]) {
  // rename own components by namespace prefix defined in stencil.config.ts 
  if (plt.replaceNSPrefix && 
      typeof(args[0]) === 'string' && 
      args[0].indexOf(Env.nsPrefix+'-') > -1
  ) {
    args[0] = `${plt.replaceNSPrefix}-${args[0]}`;
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
