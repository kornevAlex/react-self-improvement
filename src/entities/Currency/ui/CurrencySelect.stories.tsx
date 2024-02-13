import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../model/types/currency';

export default {
	title: 'Entities/CurrencySelect',
	component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = () => <CurrencySelect/>;

export const DarkCurrencySelect = Template.bind({});
DarkCurrencySelect.decorators = [ThemeDecorator(Theme.DARK)];
DarkCurrencySelect.args = {
	value: Currency.RUB

};

export const LightCurrencySelect = Template.bind({});
LightCurrencySelect.decorators = [ThemeDecorator(Theme.LIGHT)];
LightCurrencySelect.args = {
	value: Currency.USD
};
