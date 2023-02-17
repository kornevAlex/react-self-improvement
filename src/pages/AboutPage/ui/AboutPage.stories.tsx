import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import AboutPage from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const DarkAboutPage = Template.bind({});
DarkAboutPage.decorators = [ThemeDecorator(Theme.DARK)];
DarkAboutPage.args = {

};

export const LightAboutPage = Template.bind({});
LightAboutPage.decorators = [ThemeDecorator(Theme.LIGHT)];
