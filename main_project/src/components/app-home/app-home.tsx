import { Component, h, Host } from '@stencil/core';
import {MyComponent} from 'lib/dist/components/my-component'
import {MyChild} from 'lib/dist/components/my-child'

customElements.define('wmlist-component', MyComponent);
customElements.define('wmlist-child', MyChild);

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return (
      <Host>
        <my-component first="MY-COMPONENT">👻</my-component>
        <wmlist-component first="PREFIX-MY-COMPONENT">🤓</wmlist-component>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </Host>
    );
  }
}
