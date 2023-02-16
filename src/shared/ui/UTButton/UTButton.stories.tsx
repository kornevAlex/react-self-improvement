import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UTButton, ThemeButton } from './UTButton';
export default {
	title: 'shared/UTButton',
	component: UTButton,
} as ComponentMeta<typeof UTButton>;

const Template: ComponentStory<typeof UTButton> = (args) => <UTButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE
};


export const DarkThemeButton = Template.bind({});
DarkThemeButton.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE
};

