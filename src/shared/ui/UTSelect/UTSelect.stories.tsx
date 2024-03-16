import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UTSelect } from './UTSelect';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
export default {
  title: 'shared/UTSelect',
  component: UTSelect,
} as ComponentMeta<typeof UTSelect>;

const Template: ComponentStory<typeof UTSelect> = (args) => <UTSelect {...args} />;

export const WithPlaceholderDARK = Template.bind({});
WithPlaceholderDARK.args = {
  options: [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ],
  value: Currency.RUB,
  placeholder: 'placeholder'
};
WithPlaceholderDARK.decorators = [ThemeDecorator(Theme.DARK)];



export const WithoutPlacehloderLight = Template.bind({});
WithoutPlacehloderLight.args = {
  options: [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ],
  value: Currency.RUB,
};
WithoutPlacehloderLight.decorators = [ThemeDecorator(Theme.LIGHT)];
