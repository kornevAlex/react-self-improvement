import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Sidebar } from './Sidebar';
import { RouterDecorator } from 'shared/config/storybook/Decorators/RouterDecorator';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const DarkSidebar = Template.bind({});
DarkSidebar.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkSidebar.args = {

};

export const LightSidebar = Template.bind({});
LightSidebar.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
