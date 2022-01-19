import { newE2EPage } from '@stencil/core/testing';

describe('my-child', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-child></my-child>');

    const element = await page.find('my-child');
    expect(element).toHaveClass('hydrated');
  });
});
