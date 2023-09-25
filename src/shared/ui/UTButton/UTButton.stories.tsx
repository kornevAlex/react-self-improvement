import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UTButton, ButtonTheme, ButtonSize } from './UTButton';
export default {
	title: 'shared/UTButton',
	component: UTButton,
	args: {
		children: 'Text',
	}
} as ComponentMeta<typeof UTButton>;

const Template: ComponentStory<typeof UTButton> = (args) => <UTButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Clear = Template.bind({});
Clear.args = {
	theme: ButtonTheme.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
	theme: ButtonTheme.OUTLINE
};


export const BackgroundButton = Template.bind({});
BackgroundButton.args = {
	theme: ButtonTheme.BACKGROUND
};



export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED
};



export const SquareButton = Template.bind({});
SquareButton.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true
};



export const SquareButtonSizeL = Template.bind({});
SquareButtonSizeL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L
};



export const SquareButtonSizeXL = Template.bind({});
SquareButtonSizeXL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL
};





export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED,
	size: ButtonSize.L
};



export const ButtonSizeXL = Template.bind({});
ButtonSizeXL.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED,
	size: ButtonSize.XL
};

export const Disabled = Template.bind({});
SquareButtonSizeL.args = {
	children: 'DisabledButton',
	theme: ButtonTheme.OUTLINE,
	disabled: true,
	size: ButtonSize.L
};
