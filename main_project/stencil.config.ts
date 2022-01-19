import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'main',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  extras: {
    tagNameTransform: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: 'dist/custom-elements',
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};
