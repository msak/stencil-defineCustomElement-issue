import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return (
      <Host>
        <my-component first="MY-COMPONENT">👻</my-component>
        <prefix-my-component first="PREFIX-MY-COMPONENT">🤓</prefix-my-component>
      </Host>
    );
  }
}
