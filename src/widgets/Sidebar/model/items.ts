import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Home from 'shared/img/home-outline.svg';
import Info from 'shared/img/info-outline.svg';
import Profile from 'shared/img/profile.svg';

export interface SidebarItemInterface {
    path: string;
    text: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemInterface[] = [
	{
		path: RoutePath.main,
		text: 'Главная',
		Icon: Home
	},
	{
		path: RoutePath.about,
		text: 'О нас',
		Icon: Info
	},
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: Profile
	},
];
