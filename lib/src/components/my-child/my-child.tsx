import { Component, Host, h } from '@stencil/core';

@Component({
  tag: '__prefix__-child',
  styleUrl: 'my-child.css',
  shadow: true,
})
export class MyChild {

  render() {
    return (
      <Host>
         ... and this is my child!
      </Host>
    );
  }

}
