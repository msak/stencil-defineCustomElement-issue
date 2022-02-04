
import { Config } from "@stencil/core/internal";
import { nodeResolve } from '@rollup/plugin-node-resolve';

const ns = 'lib';
export const config: Config = {
  namespace: ns,
  // globalScript: 'src/global/lib.ts',
  extras: {
    // tagNameTransform: true,
  },
  env: {
    nsPrefix : 'my'
  },
  // nodeResolve: {
  //   only: [
  //     '' /* needs to be set to avoid bundling any peer dependency */
  //   ],
  // },
  rollupPlugins: {
    before: [
      nodeResolve({
        resolveOnly: [''],
      }),
    ],
  },
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false, // this does the trick, but why? see https://github.com/ionic-team/stencil/issues/3206
    },
    {
      type: 'docs-readme',
    },
  ],
};
