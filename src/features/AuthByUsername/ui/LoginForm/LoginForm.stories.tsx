import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator, StoreDecorator } from 'shared/config/storybook';
import { LoginForm } from './LoginForm';

export default {
	title: 'features/LoginForm',
	args: {
		children: 'test',
	},
	component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const DarkLoginForm = Template.bind({});
DarkLoginForm.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, StoreDecorator({
	auth: {
		username: '123',
		password: '123'
	}
})];
DarkLoginForm.args = {
};

export const LightLoginForm = Template.bind({});
LightLoginForm.args = {

};
LightLoginForm.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator({
	auth: {
		username: '123',
		password: '123'
	}
})];


export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {

};
LoginFormWithError.decorators = [RouterDecorator, StoreDecorator({
	auth: {
		username: '123',
		password: '123',
		error: 'Ошибка'
	}
})];


export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {

};
LoginFormLoading.decorators = [RouterDecorator, StoreDecorator({
	auth: {
		username: '123',
		password: '123',
		isLoading: true,
	}
})];

