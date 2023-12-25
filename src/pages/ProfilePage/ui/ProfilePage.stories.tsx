import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator, RouterDecorator, StoreDecorator } from 'shared/config/storybook';
import ProfilePage from './ProfilePage';

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>;

export const DarkProfilePage = Template.bind({});
DarkProfilePage.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, StoreDecorator({
	profile: {
		data: undefined,
		readonly: true,
		error: '',
		isLoading: false,
	}
})];
DarkProfilePage.args = {

};

export const LightProfilePage = Template.bind({});
LightProfilePage.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator({
	profile: {
		data: undefined,
		readonly: true,
		error: '',
		isLoading: false,
	}
})];
