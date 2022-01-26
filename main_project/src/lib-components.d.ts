import {JSX as lib_JSX} from 'lib/dist/types/components';

declare module "@stencil/core" {
  namespace JSX {
      interface IntrinsicElements {
        "wmlist-my-child": lib_JSX.IntrinsicElements['my-child'];
        "wmlist-my-component": lib_JSX.IntrinsicElements['my-component'];
      }
    }
  }
  
