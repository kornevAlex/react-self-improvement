import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator } from 'shared/config/storybook';
import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const DarkMainPage = Template.bind({});
DarkMainPage.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkMainPage.args = {

};

export const LightMainPage = Template.bind({});
LightMainPage.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
