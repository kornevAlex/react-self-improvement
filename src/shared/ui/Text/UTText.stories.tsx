import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextSize, TextTheme, UTText } from './UTText';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
export default {
	title: 'shared/UTText',
	component: UTText,
	args: {
		children: 'Text',
	}
} as ComponentMeta<typeof UTText>;

const Template: ComponentStory<typeof UTText> = (args) => <UTText {...args} />;

export const TextWithTitle = Template.bind({});
TextWithTitle.args = {
	title: 'Заголовок текста',
	text: 'Текст'
};

export const TextTitleError = Template.bind({});
TextTitleError.args = {
	title: 'Заголовок текста',
	text: 'Текст',
	theme: TextTheme.ERROR,
};

export const Text = Template.bind({});
Text.args = {
	text: 'Текст'
};

export const Title = Template.bind({});
Title.args = {
	title: 'Текст'
};


export const TitleDark = Template.bind({});
TitleDark.args = {
	title: 'Текст'
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextWithTitleDark = Template.bind({});
TextWithTitleDark.args = {
	title: 'Заголовок текста',
	text: 'Текст'
};
TextWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextDark = Template.bind({});
TextDark.args = {
	text: 'Текст'
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextDarkSizeM = Template.bind({});
TextDarkSizeM.args = {
	title: 'Заголовок текста',
	text: 'Текст',
	size: TextSize.M,
};
TextDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const TextDarkSizeL = Template.bind({});
TextDarkSizeL.args = {
	title: 'Заголовок текста',
	text: 'Текст',
	size: TextSize.L,
};
TextDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];
