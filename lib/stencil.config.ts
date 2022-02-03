
import { Config } from "@stencil/core/internal";

export const config: Config = {
  namespace: 'lib',
  // globalScript: 'src/global/lib.ts',
  extras: {
    // tagNameTransform: true,
  },
  outputTargets: [
    {
      type: 'dist-custom-elements',
      externalRuntime: false, // this does the trick, but why? see https://github.com/ionic-team/stencil/issues/3206
    },
    {
      type: 'docs-readme',
    },
  ],
};
