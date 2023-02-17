import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Loader } from './Loader';

export default {
	title: 'shared/Loader',
	component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const DarkLoader = Template.bind({});
DarkLoader.decorators = [ThemeDecorator(Theme.DARK)];
DarkLoader.args = {
};

export const LightLoader = Template.bind({});
LightLoader.decorators = [ThemeDecorator(Theme.LIGHT)];
