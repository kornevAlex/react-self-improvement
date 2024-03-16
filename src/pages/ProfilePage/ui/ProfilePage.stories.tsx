import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator, StoreDecorator } from 'shared/config/storybook';
import ProfilePage from './ProfilePage';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>;

export const DarkProfilePage = Template.bind({});
DarkProfilePage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    data: {
      age: 21,
      username: 'test',
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.EUR,
      firstname: 'test'
    },
    readonly: true,
    error: '',
    isLoading: false,
  }
}), RouterDecorator];
DarkProfilePage.args = {

};

export const LightProfilePage = Template.bind({});
LightProfilePage.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    data: {
      age: 21,
      username: 'test',
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.EUR,
      firstname: 'test'
    },
    readonly: true,
    error: '',
    isLoading: false,
  }
}), RouterDecorator];
