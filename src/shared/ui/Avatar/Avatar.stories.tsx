import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
export default {
	title: 'shared/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Medium = Template.bind({});
Medium.args = {
	src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg',
	size: 150,
};
Medium.decorators = [ThemeDecorator(Theme.DARK)];



export const Small = Template.bind({});
Small.args = {
	src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg',
	size: 50,
};
Small.decorators = [ThemeDecorator(Theme.LIGHT)];

