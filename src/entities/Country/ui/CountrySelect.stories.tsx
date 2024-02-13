import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { CountrySelect } from './CountrySelect';
import { Country } from '../model/types/country';

export default {
	title: 'Entities/CountrySelect',
	component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = () => <CountrySelect/>;

export const DarkCountrySelect = Template.bind({});
DarkCountrySelect.decorators = [ThemeDecorator(Theme.DARK)];
DarkCountrySelect.args = {
	value: Country.Russia

};

export const LightCountrySelect = Template.bind({});
LightCountrySelect.decorators = [ThemeDecorator(Theme.LIGHT)];
LightCountrySelect.args = {
	value: Country.UK
};
