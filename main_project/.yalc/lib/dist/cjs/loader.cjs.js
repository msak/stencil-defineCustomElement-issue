'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59bb9dd4.js');

/*
 Stencil Client Patch Esm v2.12.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-child_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"my-child"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
