import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator } from 'shared/config/storybook';
import { Navbar } from './Navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const DarkNavbar = Template.bind({});
DarkNavbar.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkNavbar.args = {

};

export const LightNavbar = Template.bind({});
LightNavbar.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
