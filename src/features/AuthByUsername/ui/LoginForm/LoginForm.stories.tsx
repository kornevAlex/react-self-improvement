import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator } from 'shared/config/storybook';
import { LoginForm } from './LoginForm';
import { i18nDecorator } from 'shared/config/storybook/Decorators/i18nDecorator';

export default {
	title: 'features/LoginForm',
	args: {
		children: 'test',
	},
	component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const DarkLoginForm = Template.bind({});
DarkLoginForm.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, i18nDecorator];
DarkLoginForm.args = {
};

export const LightLoginForm = Template.bind({});
LightLoginForm.args = {

};
LightLoginForm.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, i18nDecorator()];
