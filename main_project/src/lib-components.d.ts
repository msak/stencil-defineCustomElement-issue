import {JSX as lib_JSX} from 'lib/dist/types/components';

declare module "@stencil/core" {
  namespace JSX {
      interface IntrinsicElements {
        "wmlist-child": lib_JSX.IntrinsicElements['my-child'];
        "wmlist-component": lib_JSX.IntrinsicElements['my-component'];
      }
    }
  }
  
