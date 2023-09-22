import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator, i18nDecorator } from 'shared/config/storybook';
import { NotFoundPage } from './NotFoundPage';

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const DarkNotFoundPage = Template.bind({});
DarkNotFoundPage.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, i18nDecorator];
DarkNotFoundPage.args = {

};

export const LightNotFoundPage = Template.bind({});
LightNotFoundPage.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, i18nDecorator];
