import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  profile: {
    age: 21,
    username: 'test',
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.EUR,
    firstname: 'test'
  }
};


export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};



export const WithError = Template.bind({});
WithError.args = {
  error: 'test'
};
