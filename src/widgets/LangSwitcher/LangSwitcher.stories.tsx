import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator } from 'shared/config/storybook';
import { LangSwitcher } from './LangSwitcher';

export default {
	title: 'widget/LangSwitcher',
	component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const DarkLangSwitcher = Template.bind({});
DarkLangSwitcher.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
DarkLangSwitcher.args = {

};

export const LightLangSwitcher = Template.bind({});
LightLangSwitcher.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
