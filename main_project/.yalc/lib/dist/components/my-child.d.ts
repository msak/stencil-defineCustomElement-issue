import type { Components, JSX } from "../types/components";

interface MyChild extends Components.MyChild, HTMLElement {}
export const MyChild: {
  prototype: MyChild;
  new (): MyChild;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
