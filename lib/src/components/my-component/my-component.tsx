import { Component, Prop} from '@stencil/core';
import { format } from '../../utils/utils';
import { h } from '@webmailer/experimentals.custom-elements';

import {getMessage} from 'api';



@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  protected componentWillRender() {
    console.log('##########', getMessage());

  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}<span><slot /></span><my-child></my-child></div>;
  }
}
