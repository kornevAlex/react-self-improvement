import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator } from 'shared/config/storybook';
import { PageLoader } from './PageLoader';

export default {
  title: 'widget/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const DarkPageLoader = Template.bind({});
DarkPageLoader.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkPageLoader.args = {

};

export const LightPageLoader = Template.bind({});
LightPageLoader.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
