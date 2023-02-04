import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from '../ProductCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'uikit/Blue DLS by Jefri/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  disabled: false,
  title: 'John Mayer PRS Silver Sky SE Dragon fruit Made in Indonesia',
  img: 'https://picsum.photos/200/200'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'Product Name Small',
  img: 'https://picsum.photos/200/200'
};
