import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { SidebarItem } from './SidebarItem';
import { RouterDecorator } from 'shared/config/storybook/Decorators/RouterDecorator';

export default {
	title: 'widget/SidebarItem',
	component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const DarkSidebarItem = Template.bind({});
DarkSidebarItem.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkSidebarItem.args = {

};

export const LightSidebarItem = Template.bind({});
LightSidebarItem.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
