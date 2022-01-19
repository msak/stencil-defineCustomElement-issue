import { Component, Host, h } from '@stencil/core';
export class MyChild {
  render() {
    return (h(Host, null, "... and this is my child!"));
  }
  static get is() { return "my-child"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-child.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-child.css"]
  }; }
}
