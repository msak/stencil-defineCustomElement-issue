import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    dir: 'output',
    format: 'es'
  },
  plugins: [
    nodeResolve({
      resolveOnly: ['']
    }),
    commonjs({
    }),
  ]
};