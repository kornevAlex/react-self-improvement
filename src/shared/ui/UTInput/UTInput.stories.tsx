import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UTInput } from './UTInput';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme, } from 'app/providers/ThemeProvider';
export default {
  title: 'shared/UTInput',
  component: UTInput,
} as ComponentMeta<typeof UTInput>;

const Template: ComponentStory<typeof UTInput> = (args) => <UTInput {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'test placeholder',
};
WithPlaceholder.decorators = [ThemeDecorator(Theme.DARK)];



export const WithPlaceholderAutofocus = Template.bind({});
WithPlaceholderAutofocus.args = {
  placeholder: 'test placeholder',
  autoFocus: true,
};
WithPlaceholderAutofocus.decorators = [ThemeDecorator(Theme.LIGHT)];

