import { newSpecPage } from '@stencil/core/testing';
import { MyChild } from '../my-child';

describe('my-child', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyChild],
      html: `<my-child></my-child>`,
    });
    expect(page.root).toEqualHtml(`
      <my-child>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-child>
    `);
  });
});
