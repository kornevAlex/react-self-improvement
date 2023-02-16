import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Sidebar } from './Sidebar';

export default {
	title: 'widget/Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const DarkSidebar = Template.bind({});
DarkSidebar.decorators = [ThemeDecorator(Theme.DARK)];
DarkSidebar.args = {

};

export const LightSidebar = Template.bind({});
LightSidebar.decorators = [ThemeDecorator(Theme.LIGHT)];
