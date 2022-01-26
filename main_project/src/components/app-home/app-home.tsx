import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return (
      <Host>
        <__prefix__-component first="MY-COMPONENT">👻</__prefix__-component>
        <wmlist-my-component first="PREFIX-MY-COMPONENT">🤓</wmlist-my-component>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </Host>
    );
  }
}
