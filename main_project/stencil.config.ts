import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

const ns = 'main';
export const config: Config = {
  namespace: ns,
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  env: {
    prefix: 'wmlist',
    namespace: ns,
  },
  extras: {
    // tagNameTransform: true,
    // scriptDataOpts: true,
  },
  outputTargets: [
    // {
    //   type: 'dist',
    //   // esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements-bundle',
    //   dir: 'dist/custom-elements',
    // },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};
