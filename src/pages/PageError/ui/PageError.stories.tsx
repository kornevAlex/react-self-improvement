import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator } from 'shared/config/storybook';
import { PageError } from './PageError';

export default {
  title: 'pages/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const DarkPageError = Template.bind({});
DarkPageError.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkPageError.args = {

};

export const LightPageError = Template.bind({});
LightPageError.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
