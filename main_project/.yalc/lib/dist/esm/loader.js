import { p as promiseResolve, b as bootstrapLazy } from './index-0b44c650.js';

/*
 Stencil Client Patch Esm v2.12.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-child_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"my-child"]]]], options);
  });
};

export { defineCustomElements };
