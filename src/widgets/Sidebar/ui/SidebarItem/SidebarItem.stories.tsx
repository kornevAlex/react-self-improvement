import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { SidebarItem } from './SidebarItem';
import { RouterDecorator } from 'shared/config/storybook/Decorators/RouterDecorator';
import Profile from 'shared/img/profile.svg';

export default {
	title: 'widget/SidebarItem',
	component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const DarkSidebarItem = Template.bind({});
DarkSidebarItem.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkSidebarItem.args = {
	collapsed: false,
	Icon: Profile,
	path: './test',
	textKey: 'Dark Sidebar Item'
};


export const LightSidebarItem = Template.bind({});
LightSidebarItem.args = {
	collapsed: false,
	Icon: Profile,
	path: './test',
	textKey: 'Light Sidebar Item'
};
LightSidebarItem.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];


export const CollapsedSidebarItem = Template.bind({});
CollapsedSidebarItem.args = {
	collapsed: true,
	Icon: Profile,
	path: './test',
	textKey: 'Light Sidebar Item'
};
CollapsedSidebarItem.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
