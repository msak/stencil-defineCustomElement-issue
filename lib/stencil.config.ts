
import { Config } from "@stencil/core/internal";

export const config: Config = {
  namespace: 'lib',
  globalScript: 'src/global/lib.ts',
  extras: {
    tagNameTransform: true,
  },
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
