import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator, i18nDecorator } from 'shared/config/storybook';
import { UTLink } from './UTLink';

export default {
	title: 'shared/UTLink',
	args: {
		children: 'test',
	},
	component: UTLink,
} as ComponentMeta<typeof UTLink>;

const Template: ComponentStory<typeof UTLink> = (args) => <UTLink {...args} />;

export const DarkUTLink = Template.bind({});
DarkUTLink.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, i18nDecorator];
DarkUTLink.args = {
};

export const LightUTLink = Template.bind({});
LightUTLink.args = {

};
LightUTLink.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, i18nDecorator];
