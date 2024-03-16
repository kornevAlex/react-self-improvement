import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const StandartThemeSwitcher = Template.bind({});
StandartThemeSwitcher.decorators = [ThemeDecorator(Theme.DARK)];
